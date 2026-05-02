# 🚀 Railway.app'ga Deploy Qilish Qollanmasi

## 📋 Tayyorlash (1-qadami)

### 1. GitHub Hisobi
1. https://github.com ga boring
2. Ro'yhatdan o'tish yoki kirish

### 2. SSH Key Yaratish (ixtiyoriy, lekin tavsiya etiladi)
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### 3. GitHub'da SSH Key Qo'shish
1. GitHub Settings > SSH and GPG keys
2. "New SSH key" bosing
3. SSH key'ni qo'ying

---

## 🐙 GitHub Repository Yaratish va Push Qilish

### Qadam 1: GitHub'da Yangi Repo Yaratish
1. https://github.com/new ga boring
2. Repository nomini kiriting: `telegram-sotuv-bot` yoki o'zingizning nomi
3. Description: "Qo'g'irchoq tikilish sotuv telegram bot"
4. "Create repository" bosing
5. **SSH URL'ni nusxa qiling** (shunga o'xshash): `git@github.com:username/telegram-sotuv-bot.git`

### Qadami 2: Loyihani Git'ga Qo'shish
Loyiha papkasida terminal ochib:

```bash
# Git inicialize qilish
git init

# Remote repository qo'shish (SSH URL'ni o'z URL'ingiz bilan almashtirasiz)
git remote add origin git@github.com:username/telegram-sotuv-bot.git

# Asosiy branch nomi
git branch -M main

# Barcha fayllarni stage qilish
git add .

# Commit qilish
git commit -m "Initial commit: Telegram sotuv bot ready for deployment"

# GitHub'ga push qilish
git push -u origin main
```

---

## 🚂 Railway.app'ga Deploy Qilish

### Qadam 1: Railway Akkauntini Ochish
1. https://railway.app ga boring
2. GitHub orqali sign up qiling
3. Railway'ni GitHub'ga ulanish uchun ruxsat berish

### Qadam 2: Yangi Proyekt Yaratish
1. Railway dashboard'da "+ New Project" bosing
2. "Deploy from GitHub repo" tanlang
3. O'z repo'ni tanlang (`telegram-sotuv-bot`)
4. "Deploy" bosing

### Qadam 3: Environment O'zgaruvchilarini Qo'shish
1. Railway dashboard'da proyektni ochish
2. "Variables" tab'ini tanlang
3. "New Variable" bosing
4. Qo'shish:
   - **BOT_TOKEN** = `123456789:ABCdefGHIjklmnoPQRstuvWXYZ` (O'z tokeningiz)
   - **ADMIN_CHAT_ID** = `1234567890` (O'z ID'ingiz)

### Qadam 4: Deploy Boshlash
1. Railway avtomatik deploy qiladi
2. "Deployments" tab'idan status ko'rish
3. Build complete bo'lganda bot ishga tushuriladi

---

## 🔧 Kerakli Fayllar

Quyidagi fayllar yaratilgan:
- ✅ `Procfile` - Railway'ga bot'ni ishga tushirish uchun
- ✅ `railway.json` - Railway specific sozlamalar
- ✅ `.env.example` - Environment o'zgaruvchilari shabloni
- ✅ `package.json` - Dependencies

---

## 🐛 Muammolarni Hal Qilish

### Build Failed
- `package.json` da qo'shimcha dependencies kerakmi tekshiring
- Komanda: `npm install` va `npm start` to'g'ri ishlayapmi

### Bot ishlamaydi
- Railway logs'ni tekshiring: Deployments > View Logs
- Environment variables to'g'ri o'rnatilganmi tekshiring
- BOT_TOKEN va ADMIN_CHAT_ID to'g'ri ekanmi

### GitHub'ga Push Bo'lmaydi
```bash
# SSH key'ni tekshirish
ssh -T git@github.com

# Yoki HTTPS orqali push qilish
git remote set-url origin https://github.com/username/telegram-sotuv-bot.git
git push -u origin main
```

---

## 📊 Railway.app Monitoring

Railway dashboard'dan ko'rish mumkin:
- ✅ Bot status (Running/Stopped)
- ✅ Logs (Barcha error va info)
- ✅ Resource usage (CPU, Memory)
- ✅ Deployment history

---

## 💰 Railway.app Narxi

- **Free tier**: $5/month credit (ko'p bot uchun etarli)
- **Pay as you go**: Faqat ishlatilgan resource uchun to'lash
- Bot uchun kichik vaqt bilan ishlatsa, bepul bo'lishi mumkin

---

## 🎉 Deploy Complete!

Bot Railway'da ishga tushuriladi va 24/7 ishlaydi!

Agar savollar bo'lsa, Railway docs: https://docs.railway.app
