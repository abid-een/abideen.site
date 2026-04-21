#!/bin/bash

# ==============================================================================
# DevOps Cleanup Script for Billkar Repository
# Description: Safely removes specified temporary directories and files.
# Usage: ./cleanup.sh (Run from the repository root)
# ==============================================================================

# Ensure the script stops on individual failures if necessary
set -e

echo "--- Starting Repository Cleanup ---"

# 1. Delete the entire scratch/ directory (Backend and Src locations found)
if [ -d "balnce/scratch" ]; then
    rm -rf "balnce/scratch"
    echo "[SUCCESS] Deleted directory: balnce/scratch/"
else
    echo "[SKIPPED] Directory not found: balnce/scratch/"
fi

if [ -d "balnce/src/scratch" ]; then
    rm -rf "balnce/src/scratch"
    echo "[SUCCESS] Deleted directory: balnce/src/scratch/"
else
    echo "[SKIPPED] Directory not found: balnce/src/scratch/"
fi

# 2. Delete all .txt files inside the tests/ directory
if [ -d "balnce/tests" ]; then
    # targeted deletion of .txt files to keep test code intact
    find "balnce/tests" -maxdepth 1 -name "*.txt" -type f -exec rm -f {} +
    echo "[SUCCESS] Deleted all .txt files in balnce/tests/"
else
    echo "[SKIPPED] Directory not found: balnce/tests/"
fi

# 3. Delete the playwright-report/ directory
if [ -d "balnce-frontend/playwright-report" ]; then
    rm -rf "balnce-frontend/playwright-report"
    echo "[SUCCESS] Deleted directory: balnce-frontend/playwright-report/"
else
    echo "[SKIPPED] Directory not found: balnce-frontend/playwright-report/"
fi

# 4. Delete specific mock file: tests/__mocks__/uuid.js
MOCK_FILE="balnce/tests/__mocks__/uuid.js"
if [ -f "$MOCK_FILE" ]; then
    rm "$MOCK_FILE"
    echo "[SUCCESS] Deleted file: $MOCK_FILE"
else
    echo "[SKIPPED] File not found: $MOCK_FILE"
fi

# 5. Delete specific requirement file: src/components/layout/Projectrequirement.prd
PRD_FILE="balnce-frontend/src/components/layout/Projectrequirement.prd"
if [ -f "$PRD_FILE" ]; then
    rm "$PRD_FILE"
    echo "[SUCCESS] Deleted file: $PRD_FILE"
else
    echo "[SKIPPED] File not found: $PRD_FILE"
fi

echo "--- Cleanup Completed Successfully ---"
