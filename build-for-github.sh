#!/bin/bash
# Build script for GitHub Pages deployment
echo "Building client application..."
npm run build:client

echo "Copying files to correct location for GitHub Actions..."
mkdir -p dist
cp -r client/dist/client dist/

echo "✅ Build complete! Files ready for GitHub Pages deployment in dist/client/"
ls -la dist/client/