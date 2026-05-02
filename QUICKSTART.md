# 🚀 TEZKOR BOSHLASH QOLLANMASI

## 1-QADAM: Node.js o'rnatish

Agar Node.js o'rnatilmagan bo'lsa:
1. https://nodejs.org/ saytiga boring
2. "LTS" versiyasini yuklab oling
3. O'rnatishni yakunlashtiring

Tekshirish uchun terminalda:
```bash
node --version
npm --version
```

## 2-QADAM: Loyihani tayyorlash

Loyiha papkasiga boring:
```bash
cd "c:\Users\Lenovo\Desktop\sotuv bot"
```

Kutubxonalarni o'rnatish:
```bash
npm install
```

## 3-QADAM: .env faylni tuzish

1. `.env` fayl yasing va quyidagi kodni kiriting:

```env
BOT_TOKEN=your_bot_token
ADMIN_CHAT_ID=your_admin_id
```

## 4-QADAM: Bot tokenini olish

1. Telegram'da [@BotFather](https://t.me/botfather) ga boring
2. `/start` bosing
3. `/newbot` komandasini yuboring
4. Bot nomi va username kiriting (masalan: "Sotuv Bot", "sotuv_bot")
5. Token tayyorlandi - uni `.env` faylga kiriting

Misol:
```env
BOT_TOKEN=123456789:ABCdefGHIjklmnoPQRstuvWXYZ
```

## 5-QADAM: Admin ID ni olish

1. Telegram'da [@userinfobot](https://t.me/userinfobot) ga boring
2. `/start` bosing
3. Sizning ID raqamingiz chiqadi (masalan: 1234567890)
4. Uni `.env` faylga kiriting

Misol:
```env
ADMIN_CHAT_ID=1234567890
```

## 6-QADAM: Botni ishga tushirish

Terminalda:
```bash
npm start
```

Agar muvaffaqiyatli bo'lsa, terminal'da:
```
🤖 Bot muvaffaqiyatli ishga tushdi!
⏰ Vaqt: ...
```

## 7-QADAM: Botni Telegramda sinab ko'rish

1. Telegram'da o'z botini izlab toping (masalan: @sotuv_bot)
2. `/start` bosing
3. Menyu chiqadi - tugmalarni sinab ko'ring

## 🔴 Agar xatolik bo'lsa?

### "Bot ishlamaydi" xatoligi
- `.env` faylida BOT_TOKEN va ADMIN_CHAT_ID to'g'ri ekanligini tekshiring
- Internet ulanishini tekshiring
- Tokenni @BotFather'dan yangilang

### "Module not found" xatoligi
```bash
npm install
```
buyruğini qayta ishlating

### "Unexpected token" xatoligi
- `.env` faylini tekshiring va noto'g'ri belgisini o'ldin
- Masofa, sharhlar yo'q bo'lishi kerak

## 💡 QO'SHIMCHA MASLAHAT

**Developerda saqlanish vaqtida avtomatik qayta ishga tushirish:**

```bash
npm run dev
```

Bu buyruq `nodemon` yordamida faylga o'zgartirish kiritilganda bot avtomatik qayta ishga tushurishni ta'minlaydi.

**Botni to'xtatatrish:**
Terminalda `Ctrl + C` bosing

---

✅ Hammasi tayyor! Botingiz ishga tushdi! 🎉
