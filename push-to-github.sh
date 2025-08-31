#!/bin/bash

# E-Mart Ecommerce Platform - Push to GitHub Script
# This script helps you push your code to GitHub

echo "🚀 E-Mart Ecommerce Platform - GitHub Push Script"
echo "=================================================="

# Check if repository URL is provided
if [ -z "$1" ]; then
    echo "❌ Error: Please provide your GitHub repository URL"
    echo "Usage: ./push-to-github.sh <repository-url>"
    echo ""
    echo "Example: ./push-to-github.sh https://github.com/yourusername/e-mart-ecommerce.git"
    echo ""
    echo "📝 Steps to create GitHub repository:"
    echo "1. Go to https://github.com/new"
    echo "2. Repository name: e-mart-ecommerce (or your preferred name)"
    echo "3. Description: Complete E-Mart ecommerce platform with search, cart, and product management features"
    echo "4. Choose Public or Private"
    echo "5. DO NOT initialize with README, .gitignore, or license"
    echo "6. Click 'Create repository'"
    echo "7. Copy the repository URL and run this script again"
    exit 1
fi

REPO_URL=$1

echo "✅ Adding remote origin: $REPO_URL"
git remote add origin $REPO_URL

echo "✅ Pushing code to GitHub..."
git push -u origin main

echo ""
echo "🎉 Success! Your E-Mart ecommerce platform is now on GitHub!"
echo "📱 Repository URL: $REPO_URL"
echo ""
echo "🔗 You can now:"
echo "   - Share your repository with others"
echo "   - Deploy to platforms like Netlify, Vercel, or GitHub Pages"
echo "   - Collaborate with other developers"
echo ""
echo "📚 Next steps:"
echo "   - Add collaborators if needed"
echo "   - Set up GitHub Pages for live demo"
echo "   - Create issues for future improvements"
echo ""
echo "Happy coding! 🚀"
