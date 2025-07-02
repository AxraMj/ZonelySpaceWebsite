#!/bin/bash

# Build script for Vercel deployment
echo "Starting build process..."

# Install dependencies
npm install

# Build the client (frontend)
echo "Building frontend..."
npm run build

# Copy static files to output directory
echo "Copying static files..."
mkdir -p dist/public
cp favicon.ico dist/public/
cp site.webmanifest dist/public/
cp robots.txt dist/public/

# Copy built frontend files
if [ -d "dist/public" ]; then
    echo "Frontend build completed successfully"
else
    echo "Frontend build failed"
    exit 1
fi

echo "Build process completed successfully!"