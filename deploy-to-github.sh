#!/bin/bash
# ==============================================================================
# Script to Push Piyush Kalra's Developer Portfolio to GitHub Pages
# ==============================================================================

echo "🚀 Preparing to publish portfolio to GitHub..."

# Ensure we are in the project directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR"

# Stage and commit any recent changes
git add .
git commit -m "Update portfolio: $(date)" 2>/dev/null || true

echo ""
echo "📌 Option 1: Pushing to existing GitHub repository (e.g., github.com/piyushkalra002/portfolio)"
echo "If you have created a repository on GitHub named 'portfolio', run:"
echo "------------------------------------------------------------------"
echo "  git remote add origin https://github.com/piyushkalra002/portfolio.git"
echo "  git branch -M main"
echo "  git push -u origin main"
echo "------------------------------------------------------------------"
echo ""
echo "📌 Option 2: Pushing to GitHub Pages primary domain (piyushkalra002.github.io)"
echo "------------------------------------------------------------------"
echo "  git remote add origin https://github.com/piyushkalra002/piyushkalra002.github.io.git"
echo "  git branch -M main"
echo "  git push -u origin main"
echo "------------------------------------------------------------------"
echo ""
echo "✨ Your portfolio website will automatically be LIVE on GitHub Pages!"
