#!/bin/bash

# Build script for Vercel deployment
echo "Starting build process..."

# Install dependencies
npm install

# Build the client (frontend)
echo "Building frontend..."
npm run build

# Ensure static files are in the right place
echo "Verifying static files..."
if [ -f "client/public/favicon.ico" ]; then
    echo "✓ Favicon found in client/public/"
else
    echo "✗ Favicon missing from client/public/"
    exit 1
fi

if [ -f "client/public/site.webmanifest" ]; then
    echo "✓ Web manifest found in client/public/"
else
    echo "✗ Web manifest missing from client/public/"
    exit 1
fi

if [ -f "client/public/robots.txt" ]; then
    echo "✓ Robots.txt found in client/public/"
else
    echo "✗ Robots.txt missing from client/public/"
    exit 1
fi

# Verify build output
if [ -d "dist/public" ] && [ -f "dist/public/index.html" ]; then
    echo "✓ Frontend build completed successfully"
    echo "✓ Static files ready for deployment"
else
    echo "✗ Frontend build failed"
    exit 1
fi

echo "Build process completed successfully!"