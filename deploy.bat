@echo off
REM 🚀 Railway.app'ga Deployment Scripti (Windows)

echo.
echo 📦 Git initialization boshlang'ich...
echo.

REM 1. Git'ni initialize qilish
git init

REM 2. GitHub repo URL'sini so'rash
echo ℹ️  GitHub repository URL'sini kiriting:
echo Misol: https://github.com/YOUR_USERNAME/telegram-sotuv-bot.git
echo.
set /p REPO_URL="GitHub URL: "

git remote add origin %REPO_URL%

REM 3. Barcha fayllarni stage qilish
echo.
echo 📝 Barcha fayllar stage qililyapti...
git add .

REM 4. Commit qilish
echo.
echo 💾 Commit qililyapti...
git commit -m "Initial commit: Telegram sotuv bot - Railway deployment ready"

REM 5. Branch nomi
git branch -M main

REM 6. GitHub'ga push qilish
echo.
echo 🚀 GitHub'ga push qililyapti...
git push -u origin main

echo.
echo ✅ Bo'ldi! Repository GitHub'da tayyorlandi!
echo 🌐 Railway.app'ga boring va deploy qiling: https://railway.app
echo.
pause
