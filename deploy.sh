#!/bin/bash

# Build the project
echo "Building the project..."
pnpm build

# Create a temporary directory for deployment
echo "Preparing for deployment..."
rm -rf deploy
mkdir deploy
cp -r dist/* deploy/

# If you want to deploy manually to GitHub Pages
# You can use the following commands:
# git add deploy/
# git commit -m "Deploy to GitHub Pages"
# git subtree push --prefix deploy origin gh-pages

echo "Build completed! Files are ready in the 'deploy' directory."
echo "To deploy to GitHub Pages:"
echo "1. Push the deploy directory to gh-pages branch"
echo "2. Or use GitHub Actions (recommended)"
