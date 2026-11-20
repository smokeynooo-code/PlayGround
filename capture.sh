#!/usr/bin/env bash
set -euo pipefail

START_MS=$(date +%s%3N)
trap 'END_MS=$(date +%s%3N); printf "[timing] capture.sh: %s ms\n" "$((END_MS-START_MS))"' EXIT

: "${CAPTURE_URL:?CAPTURE_URL is required}"
: "${CAPTURE_DIR:?CAPTURE_DIR is required}"
mkdir -p "$CAPTURE_DIR"

printf '[timing] browser setup: start\n'
SETUP_START_MS=$(date +%s%3N)
SESSION="capture-$$"
cleanup() {
  playwright-cli --session "$SESSION" close >/dev/null 2>&1 || true
}
trap 'cleanup; END_MS=$(date +%s%3N); printf "[timing] capture.sh: %s ms\n" "$((END_MS-START_MS))"' EXIT

command -v playwright-cli >/dev/null 2>&1 || {
  echo "Temporary browser infrastructure failure: playwright-cli unavailable" >&2
  exit 75
}
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
# Keep enough time for Three.js initialization and loading-screen completion.
sleep 8
playwright-cli --session "$SESSION" resize 1280 720 >/dev/null 2>&1 || {
  echo "Script defect: could not configure desktop viewport" >&2
  exit 1
}
SNAP_OUTPUT=$(playwright-cli --session "$SESSION" screenshot --filename "$CAPTURE_DIR/final-desktop.png" 2>&1) || {
  echo "Temporary browser capture failure: $SNAP_OUTPUT" >&2
  exit 75
}
DESKTOP_END_MS=$(date +%s%3N)
printf '[timing] desktop render wait and capture: %s ms\n' "$((DESKTOP_END_MS-DESKTOP_START_MS))"

printf '[timing] mobile render wait and capture: start\n'
MOBILE_START_MS=$(date +%s%3N)
playwright-cli --session "$SESSION" resize 390 844 >/dev/null 2>&1 || {
  echo "Script defect: could not configure mobile viewport" >&2
  exit 1
}
MOBILE_OUTPUT=$(playwright-cli --session "$SESSION" screenshot --filename "$CAPTURE_DIR/final-mobile.png" 2>&1) || {
  echo "Temporary browser capture failure: $MOBILE_OUTPUT" >&2
  exit 75
}
MOBILE_END_MS=$(date +%s%3N)
printf '[timing] mobile render wait and capture: %s ms\n' "$((MOBILE_END_MS-MOBILE_START_MS))"

for image in "$CAPTURE_DIR/final-desktop.png" "$CAPTURE_DIR/final-mobile.png"; do
  if [[ ! -s "$image" ]]; then
    echo "Rendering defect: capture missing or empty: $image" >&2
    exit 1
  fi
done

cleanup
trap - EXIT
printf '[timing] capture complete: %s ms\n' "$(( $(date +%s%3N) - START_MS ))"
exit 0
