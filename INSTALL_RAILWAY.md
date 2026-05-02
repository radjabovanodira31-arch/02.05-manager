# 🚀 Railway.app Deployment - To'liq Qo'llanma

## 1️⃣ GitHub'da Repository Yaratish

### A) GitHub.com'ga boring
https://github.com/new

### B) Repository ma'lumotlarini kiriting:
```
Repository name: telegram-sotuv-bot
Description: Qo'g'irchoq tikilish sotuv telegram bot
Visibility: Public
```

### C) "Create repository" bosing

### D) SSH URL nusxa qiling (shunga o'xshash):
```
git@github.com:YOUR_USERNAME/telegram-sotuv-bot.git
```
(HTTPS URL ham ishlatishingiz mumkin)

---

## 2️⃣ Terminal'da Git Commands

### Windows'da PowerShell yoki Command Prompt oching
### Mac/Linux'da Terminal oching

Loyiha papkasiga boring:
```bash
cd "c:\Users\Lenovo\Desktop\sotuv bot"
```

### Quydagi komandalas ketma-ket ishlating:

```bash
# 1. Git'ni initialize qilish
git init

# 2. GitHub repo'sini qo'shish (o'z URL'ingiz bilan almashtirasiz!)
git remote add origin git@github.com:YOUR_USERNAME/telegram-sotuv-bot.git

# YOKI HTTPS ishlatsa:
# git remote add origin https://github.com/YOUR_USERNAME/telegram-sotuv-bot.git

# 3. Barcha fayllarni stage qilish
git add .

# 4. Commit qilish
git commit -m "Initial commit: Telegram sotuv bot - Railway deployment ready"

# 5. Main branch'i qo'shish
git branch -M main

# 6. GitHub'ga push qilish
git push -u origin main
```

### Password/Token so'rasa:
- **HTTPS**: GitHub password yoki Personal Access Token (PAT)
- **SSH**: SSH key oldindan setup qilingan bo'lishi kerak

---

## 3️⃣ Railway.app'ga Deploy Qilish

### A) Railway'ga boring va Sign Up
https://railway.app

**"Continue with GitHub" bosing**

### B) Authorization
GitHub'ga ruxsat berish

### C) Yangi Project Yaratish
1. Dashboard'da **"+ New Project"** bosing
2. **"Deploy from GitHub repo"** tanlang
3. `telegram-sotuv-bot` repository'ni tanlang
4. **"Deploy"** bosing

### D) Build bo'lgunini kutish
Terminal'da qayta-qayta `npm install` va `node bot.js` ishlayapti
2-3 minut kutish kerak

### E) Status ko'rish
- **Deployments** tab'i ko'rish
- Green checkmark bo'lsa, deploy muvaffaqiyatli

---

## 4️⃣ Environment Variables Qo'shish (MUHIM!)

Railway dashboard'da:

1. Proyektni ochish
2. **"Variables"** tab'ini tanlang
3. **"New Variable"** bosing
4. Qo'shish (shunga o'xshash):

```
BOT_TOKEN = 123456789:ABCdefGHIjklmnoPQRstuvWXYZ
ADMIN_CHAT_ID = 1234567890
```

5. **"Save"** bosing

⚠️ **Muhim**: GitHub'da `.env` push qilmang! Faqat Railway'da qo'shish kerak.

---

## 5️⃣ Bot Status Ko'rish

Railway dashboard'dan:
- **Logs** - Bot error va info
- **Metrics** - CPU, Memory usage
- **Domains** - Bot URL (ixtiyoriy)

---

## 6️⃣ Bot Online Tekshirish

Telegram'da o'z botini toping va `/start` bosing:
- ✅ Agar menyu chiqsa - **DEPLOY MUVAFFAQIYATLI!** 🎉

---

## 🔧 Xatolik Hal Qilish

### "Git command not found"
Git o'rnatilmagan. https://git-scm.com'dan yuklab oling

### "Failed to authenticate"
- SSH key setup qiling yoki HTTPS ishlatish
- GitHub PAT (Personal Access Token) yaratish

### "Build failed"
- Railway logs'ni ko'rish
- `package.json` tekshirish
- Dependencies to'g'ri ekanmi

### "Bot ishlamaydi"
- Variables to'g'ri ekanmi tekshirish
- BOT_TOKEN va ADMIN_CHAT_ID valid ekanmi

---

## 📝 O'ziga xos komandalas

**Deployment scripts (ixtiyoriy):**

Windows'da:
```bash
deploy.bat
```

Linux/Mac'da:
```bash
bash deploy.sh
```

Bu scripts avtomatik Git va push qiladi.

---

## 🎉 TAYYOR!

Bot Railway'da 24/7 ONLINE! 🚀

**Qo'shimcha:**
- Logs ko'rish: Railway Dashboard > Logs
- Settings o'zgartirish: Railway > Settings
- Analytics: Railway > Metrics

---

**Savollar**: Railway docs - https://docs.railway.app
