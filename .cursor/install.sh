#!/usr/bin/env bash
set -euo pipefail

# Bun is the pinned package manager for this repo (see package.json).
# The default Cloud Agent image ships Node but not Bun, so install it here.
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

if ! command -v bun >/dev/null 2>&1; then
  curl -fsSL https://bun.sh/install | bash
fi

bun install
