# Railway.app Deployment - Tezkor O'rnatish

## 1️⃣ GitHub'ga Push Qilish (Terminal'da)

Loyiha papkasiga boring va quyidagi komandalas ishlating:

### Agar GitHub'da repository allaqachon yaratilgan bo'lsa:

```bash
# Terminal'ni bu papkada oching va quyidagini joz qiling:

# Git initialize qilish
git init

# GitHub repository'sini qo'shish (o'z URL'ingiz bilan almashtirasiz)
git remote add origin https://github.com/YOUR_USERNAME/telegram-sotuv-bot.git

# Barcha fayllarni stage qilish
git add .

# Commit qilish
git commit -m "Initial commit: Telegram sotuv bot ready for Railway deployment"

# GitHub'ga push qilish
git branch -M main
git push -u origin main
```

### Agar GitHub'da repository allaqachon push qilgan bo'lsa:

```bash
git add .
git commit -m "Update: Ready for Railway deployment"
git push origin main
```

---

## 2️⃣ Railway.app'ga Deploy Qilish (Web'da)

1. **Railway.app'ga boring**: https://railway.app
2. **GitHub orqali Sign Up**: "Sign up with GitHub" bosing
3. **New Project** > **Deploy from GitHub repo** tanlang
4. **Repository tanlang**: `telegram-sotuv-bot`
5. **Deploy** bosing
6. Build bo'lgunini kutish (2-3 minut)

---

## 3️⃣ Environment Variables Qo'shish

Railway dashboard'da:
1. Proyektni ochish
2. **Variables** tab'ini tanlang
3. **New Variable** > Qo'shish:

```
BOT_TOKEN = 123456789:ABCdefGHIjklmnoPQRstuvWXYZ
ADMIN_CHAT_ID = 1234567890
```

4. **Save** bosing

---

## 4️⃣ Deploy Status Ko'rish

- **Deployments** tab'idan build status ko'rish
- **Logs** orqali error tekshirish
- **View Logs** > qanday ishlayotganini ko'rish

---

## 🎉 Bo'ldi!

Bot Railway'da 24/7 ishlaydi! 🚀
