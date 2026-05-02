#!/bin/bash

# 🚀 Railway.app'ga Deployment Scripti
# Bu script'ni ishga tushirish uchun: bash deploy.sh

echo "📦 Git initialization boshlang'ich..."

# 1. Git'ni initialize qilish
git init

# 2. GitHub repo'sini qo'shish (URL'ni o'zingizning GitHub repo URL'ingiz bilan almashtirasiz)
# Misol: git remote add origin https://github.com/YOUR_USERNAME/telegram-sotuv-bot.git

echo "ℹ️  GitHub repository URL'sini kiriting (masalan: https://github.com/YOUR_USERNAME/telegram-sotuv-bot.git)"
read REPO_URL

git remote add origin "$REPO_URL"

# 3. Barcha fayllarni stage qilish
echo "📝 Barcha fayllar stage qililyapti..."
git add .

# 4. Commit qilish
echo "💾 Commit qililyapti..."
git commit -m "Initial commit: Telegram sotuv bot - Railway deployment ready"

# 5. Branch nomi
git branch -M main

# 6. GitHub'ga push qilish
echo "🚀 GitHub'ga push qililyapti..."
git push -u origin main

echo "✅ Bo'ldi! Repository GitHub'da tayyorlandi!"
echo "🌐 Railway.app'ga boring va deploy qiling: https://railway.app"
