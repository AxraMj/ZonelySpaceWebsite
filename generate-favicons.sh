#!/bin/bash

# Create the output directory if it doesn't exist
mkdir -p client/public

# Generate different sizes from favicon.ico
magick favicon.ico -resize 16x16 client/public/favicon-16x16.png
magick favicon.ico -resize 32x32 client/public/favicon-32x32.png
magick favicon.ico -resize 180x180 client/public/apple-touch-icon.png
magick favicon.ico -resize 192x192 client/public/android-chrome-192x192.png
magick favicon.ico -resize 512x512 client/public/android-chrome-512x512.png

# Copy the original favicon.ico
cp favicon.ico client/public/favicon.ico

echo "Favicon files have been generated successfully!"
echo "Generated files:"
echo "- favicon.ico (original)"
echo "- favicon-16x16.png"
echo "- favicon-32x32.png"
echo "- apple-touch-icon.png (180x180)"
echo "- android-chrome-192x192.png"
echo "- android-chrome-512x512.png" 