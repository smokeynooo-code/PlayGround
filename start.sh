#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

START_MS=$(date +%s%3N)
trap 'END_MS=$(date +%s%3N); printf "[timing] start.sh total: %s ms\n" "$((END_MS-START_MS))"' EXIT

PORT_VALUE="${PORT:-3000}"
mkdir -p /home/runner/work/_temp/omgithub-web
mkdir -p "$PROJECT_DIR/dist"

printf '[timing] npm: start\n'
NPM_START_MS=$(date +%s%3N)
if [[ -f package.json ]]; then
  npm install
fi
NPM_END_MS=$(date +%s%3N)
printf '[timing] npm: %s ms\n' "$((NPM_END_MS-NPM_START_MS))"

printf '[timing] build: start\n'
BUILD_START_MS=$(date +%s%3N)
npm run build
BUILD_END_MS=$(date +%s%3N)
printf '[timing] build: %s ms\n' "$((BUILD_END_MS-BUILD_START_MS))"

if [[ ! -f "$PROJECT_DIR/dist/index.html" ]]; then
  echo "Script defect: $PROJECT_DIR/dist/index.html was not created" >&2
  exit 1
fi

printf '{"project":"%s","directory":"%s"}\n' "$PROJECT_DIR" "$PROJECT_DIR/dist" \
  > /home/runner/work/_temp/omgithub-web/deployment-output.json

printf '[timing] serve: start\n'
SERVE_START_MS=$(date +%s%3N)
npm exec -- vite preview --host 0.0.0.0 --port "$PORT_VALUE" --strictPort
SERVE_END_MS=$(date +%s%3N)
printf '[timing] serve: %s ms\n' "$((SERVE_END_MS-SERVE_START_MS))"
