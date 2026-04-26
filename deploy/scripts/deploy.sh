#!/bin/bash

# Billkar ERP Deployment Script (Server Pull Method)
# Exit on error
set -e

# Configuration
ROOT_DIR=$(pwd)
BACKEND_DIR="$ROOT_DIR/balnce"
FRONTEND_DIR="$ROOT_DIR/balnce-frontend"
NGINX_SERVED_PATH="/var/www/billkar/frontend" # Adjusted per standard Ubuntu/Nginx setups

echo "--- Starting Deployment at $(date) ---"

# 1. Update Codebase
echo "Pulling latest changes from main..."
git pull origin main

# 2. Update Submodules (if any)
# echo "Updating submodules..."
# git submodule update --init --recursive

# 3. Backend Deployment
echo "Setting up Backend..."
cd "$BACKEND_DIR"
npm install
npm run db:migrate

# 4. Frontend Deployment
echo "Setting up Frontend..."
cd "$FRONTEND_DIR"
npm install --legacy-peer-deps
npm run build

# 5. Sync Frontend Build to Nginx Path (Optional/Recommended)
if [ -d "$NGINX_SERVED_PATH" ]; then
    echo "Syncing frontend build to $NGINX_SERVED_PATH..."
    # Using rsync for efficient transfer if available, or cp
    rm -rf "$NGINX_SERVED_PATH/*"
    cp -r dist/* "$NGINX_SERVED_PATH/"
else
    echo "Warning: Nginx served path $NGINX_SERVED_PATH not found. Skipping sync."
fi

# 6. Service Restart
echo "Reloading Backend API via PM2..."
pm2 reload billkar-api || pm2 start src/server.js --name billkar-api

echo "--- Deployment Successful at $(date) ---"
