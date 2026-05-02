## 🚀 Railway.app Deployment - Tayyorlangan Fayllar

Quyidagi deployment fayllar yaratilgan:

### ✅ Railway Deployment Fayllar
- **`Procfile`** - Railway'ga bot ishga tushadigan buyruq
- **`railway.json`** - Railway'ning konfiguratsiyasi
- **`.nvmrc`** - Node.js versiyasi (v18)
- **`deploy.sh`** - Linux/Mac uchun deployment scripti
- **`deploy.bat`** - Windows uchun deployment scripti
- **`DEPLOY_RAILWAY.md`** - Batafsil deployment qollanmasi
- **`RAILWAY_QUICK.md`** - Tezkor deployment qollanmasi
- **`.env.example`** - Yangilangan (token'lar o'chirildi)

### ✅ Mavjud Deploy-Ready Fayllar
- **`bot.js`** - Bot asosiy fayli
- **`package.json`** - Dependencies va scripts
- **`.gitignore`** - Git'ga nima include qilish kerak emas
- **`README.md`** - Qo'llanma

---

## 🎯 Deployment Qadam-bo'yicha

### 1️⃣ GitHub Repository Yaratish
https://github.com/new ga boring:
- Repo nomi: `telegram-sotuv-bot` (yoki o'zingizning nomi)
- Description: "Qo'g'irchoq tikilish sotuv telegram bot"
- Create repository bosing
- SSH yoki HTTPS URL nusxa qiling

### 2️⃣ Terminal'da Deployment Scripti Ishga Tushirish

**Windows'da:**
```bash
deploy.bat
```

**Linux/Mac'da:**
```bash
bash deploy.sh
```

**Yoki qo'lda (har bir OS):**
```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/telegram-sotuv-bot.git
git add .
git commit -m "Initial commit: Telegram sotuv bot - Railway deployment ready"
git branch -M main
git push -u origin main
```

### 3️⃣ Railway.app'ga Deploy Qilish
1. https://railway.app ga boring
2. "GitHub orqali Sign Up" bosing
3. "+ New Project" > "Deploy from GitHub repo"
4. O'z repo'ni tanlang va Deploy bosing
5. Build bo'lgunini kutish (2-3 minut)
6. Variables tab'ida qo'shish:
   - `BOT_TOKEN` = sizning token
   - `ADMIN_CHAT_ID` = sizning ID

---

## 📊 Railway Free Tier

- **$5/month credit** bepul
- Ko'p bot uchun etarli
- Istalgan vaqtda upgrade qilish mumkin

---

## 🔒 Xavfsizlik

⚠️ **Muhim**: `.env` fayl GitHub'ga push qilinmaydi (`.gitignore`'da bor)
- Shaxsiy token va ID qo'lda Railway'da qo'shiladi

---

## ✨ Keyingi Qadamlar

1. ✅ Deployment fayllarini tekshiring (Procfile, railway.json)
2. ✅ GitHub'ga push qiling (deploy.bat yoki deploy.sh)
3. ✅ Railway'da variables qo'shish
4. ✅ Bot online bo'lgunini tekshirish

**Tayyorsizmi?** Deployment scripti ishga tushiring! 🚀
