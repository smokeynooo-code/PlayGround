#!/usr/bin/env bash
set -euo pipefail

START_MS=$(date +%s%3N)
SESSION="capture-$$"

cleanup() {
  playwright-cli --session "$SESSION" close >/dev/null 2>&1 || true
}
trap 'cleanup; END_MS=$(date +%s%3N); printf "[timing] capture.sh: %s ms\n" "$((END_MS-START_MS))"' EXIT

: "${CAPTURE_URL:?CAPTURE_URL is required}"
: "${CAPTURE_DIR:?CAPTURE_DIR is required}"
mkdir -p "$CAPTURE_DIR"

printf '[timing] browser setup: start\n'
SETUP_START_MS=$(date +%s%3N)
if ! command -v playwright-cli >/dev/null 2>&1; then
  echo "Temporary browser infrastructure failure: playwright-cli unavailable" >&2
  exit 75
fi
SETUP_END_MS=$(date +%s%3N)
printf '[timing] browser setup: %s ms\n' "$((SETUP_END_MS-SETUP_START_MS))"

printf '[timing] navigation: start\n'
NAV_START_MS=$(date +%s%3N)
OPEN_OUTPUT=$(playwright-cli --session "$SESSION" open "$CAPTURE_URL" 2>&1) || {
  echo "Temporary navigation/browser infrastructure failure: $OPEN_OUTPUT" >&2
  exit 75
}
NAV_END_MS=$(date +%s%3N)
printf '[timing] navigation: %s ms\n' "$((NAV_END_MS-NAV_START_MS))"

printf '[timing] desktop render wait: start\n'
DESKTOP_START_MS=$(date +%s%3N)
sleep 8
if ! playwright-cli --session "$SESSION" resize 1280 720 >/dev/null 2>&1; then
  echo "Script defect: could not configure desktop viewport" >&2
  exit 1
fi

TITLE_OUTPUT=$(playwright-cli --session "$SESSION" eval 'document.title' 2>&1) || {
  echo "Temporary browser infrastructure failure while verifying rendered page: $TITLE_OUTPUT" >&2
  exit 75
}
if [[ -z "$TITLE_OUTPUT" ]] || [[ "$TITLE_OUTPUT" == *"Blocked request"* ]]; then
  echo "Rendering defect: page did not render its document title" >&2
  exit 1
fi

if ! SNAP_OUTPUT=$(playwright-cli --session "$SESSION" screenshot --filename "$CAPTURE_DIR/final-desktop.png" 2>&1); then
  echo "Temporary browser capture failure: $SNAP_OUTPUT" >&2
  exit 75
fi
DESKTOP_END_MS=$(date +%s%3N)
printf '[timing] desktop render wait and capture: %s ms\n' "$((DESKTOP_END_MS-DESKTOP_START_MS))"

printf '[timing] mobile render wait and capture: start\n'
MOBILE_START_MS=$(date +%s%3N)
if ! playwright-cli --session "$SESSION" resize 390 844 >/dev/null 2>&1; then
  echo "Script defect: could not configure mobile viewport" >&2
  exit 1
fi
sleep 2
if ! MOBILE_OUTPUT=$(playwright-cli --session "$SESSION" screenshot --filename "$CAPTURE_DIR/final-mobile.png" 2>&1); then
  echo "Temporary browser capture failure: $MOBILE_OUTPUT" >&2
  exit 75
fi
MOBILE_END_MS=$(date +%s%3N)
printf '[timing] mobile render wait and capture: %s ms\n' "$((MOBILE_END_MS-MOBILE_START_MS))"

for image in "$CAPTURE_DIR/final-desktop.png" "$CAPTURE_DIR/final-mobile.png"; do
  if [[ ! -f "$image" ]] || [[ ! -s "$image" ]]; then
    echo "Rendering defect: capture missing or empty: $image" >&2
    exit 1
  fi
  if command -v file >/dev/null 2>&1 && ! file "$image" | grep -qi 'PNG image data'; then
    echo "Rendering defect: capture is not a valid PNG: $image" >&2
    exit 1
  fi
done

cleanup
trap - EXIT
printf '[timing] capture complete: %s ms\n' "$(( $(date +%s%3N) - START_MS ))"
exit 0
