# 🤖 Telegram Sotuv Manager Bot

Qo'g'irchoq tikilish to'plamlari va materiallarini sotish uchun Node.js va Telegraf kutubxonasida yozilgan Telegram boti.

## 📋 Bot xususiyatlari

- ✅ Foydalanuvchilar uchun:
  - Bepul darslikni ko'rish
  - 6 xil qo'g'irchoq tikilish to'plamini **rasmlari bilan** ko'rish
  - Materiallarni kategoriyalar bo'ylab **rasmlari bilan** ko'rish (Matolar, Sochlar, Oyoq kiyim, Aksessuarlar)
  - Savat orqali mahsulotlarni sotib olish
  - Buyurtma berish
  - Ko'p beriladigan savollar (FAQ)
  - Kontakt ma'lumotlarini ko'rish

- 🔐 Admin uchun:
  - Foydalanuvchi statistikasini ko'rish
  - Yangi buyurtmalar haqida bildirishnoma

## 🚀 Ishga tushirish

### 1. Depencies o'rnatish

```bash
npm install
```

### 2. `.env` faylini tuzish

`.env.example` faylini nusxa qilib `.env` fayl yasang:

```bash
cp .env.example .env
```

Keyin `.env` faylini tekshiring va o'z qiymatlarini kiriting:

```env
BOT_TOKEN=your_telegram_bot_token_here
ADMIN_CHAT_ID=your_admin_chat_id_here
```

**BOT_TOKEN ni qanday olish:**
1. Telegram'da [@BotFather](https://t.me/botfather) botiga bosin
2. `/newbot` komandasini yuborsin
3. Bot uchun nom va username kiriting
4. Token tayyorlandi - uni `.env` faylga qo'ying

**ADMIN_CHAT_ID ni qanday olish:**
1. Telegram'da [@userinfobot](https://t.me/userinfobot) botiga bosin
2. Sizning raqamingiz chiqadi - uni `.env` faylga qo'ying

### 3. Botni ishga tushirish

**Normal rejimda:**
```bash
npm start
```

**Ishlab chiqish rejimida (nodemon bilan):**
```bash
npm run dev
```

Agar nodemon o'rnatilmagan bo'lsa:
```bash
npm install --save-dev nodemon
npm run dev
```

## 📱 Bot menyusu

```
1️⃣ Bepul darslik - Bepul darslikni ko'ring va havolani oling
2️⃣ To'plamlar - 6 xil qo'g'irchoq tikilish to'plamini ko'rish
3️⃣ Kerakli mahsulotlar - 4 kategoriyaning mahsulotlari
   - Matolar
   - Sochlar
   - Oyoq kiyim
   - Aksessuarlar
4️⃣ Savat - Tanlangan mahsulotlarni ko'rish va tozalash
5️⃣ Buyurtma berish - Shartnoma berish formasini to'ldirish
6️⃣ Savollar - Ko'p beriladigan savollar va javoblar
7️⃣ Bog'lanish - Admin kontaktlari
```

## 🛍️ Mahsulotlar katalogi

### To'plamlar
- Klara to'plami: 210,000 so'm
- Alisa to'plami: 230,000 so'm
- Zara to'plami: 210,000 so'm
- Ella to'plami: 200,000 so'm
- Ro'za to'plami: 210,000 so'm
- Liza to'plami: 500,000 so'm

### Kategoriyalar
- **Matolar** - 6 xil trikotaj va furnitura
- **Sochlar** - 12 xil rang va o'lchamda sochlar (5-25 sm)
- **Oyoq kiyim** - 6 xil keda va sandal
- **Aksessuarlar** - 17 xil aksessuarlar (tugmalar, ko'zlar, kipriklar va boshqalar)

## � Rasmlari ko'rsatish

Botda quyidagi joylarda rasmlari ko'rsatiladi:

- **🎁 To'plamlar** - Har bir to'plam uchun rasm bilan narx ko'rsatiladi
- **🛍️ Kerakli mahsulotlar** - Har bir mahsulot kategoriyasida alohida rasmlari bilan ko'rsatiladi:
  - 🧵 **Matolar** - Trikotaj va furnitura rasmlari
  - 💇 **Sochlar** - Har bir soch rangining rasmi
  - 👟 **Oyoq kiyim** - Keda va sandal rasmlari
  - ✨ **Aksessuarlar** - Tugmalar, ko'zlar, kipriklar rasmlari

### Rasm URL'larini o'zgartirish

`bot.js` faylida `sets` va `materials` o'zgaruvchilarida har bir mahsulotning `image` fieldi bor. Rasm URL'larini o'zgartirishingiz mumkin:

```javascript
{ 
  id: 1, 
  name: 'To\'plam nomi', 
  price: 210000,
  image: 'https://your-image-url.com/image.jpg'  // Bu yerga rasm URL'ni qo'ying
}
```

Rasmlari quyidagi joylardan olishingiz mumkin:
- Telegram channeldan direct link
- Imgur, Tinypic, va boshqa image hosting servicelardan
- O'z serveringizdan
- Telegram'da @ImageBotHosting orqali

## 👨‍💼 Admin komandalar

```
/admin - Admin panelini ochish (faqat admin uchun)
```

Admin panel quyidagilarni ko'rsatadi:
- Jami foydalanuvchilar soni
- Jami buyurtmalar soni
- Yangi buyurtmalarning ro'yxati

## 📊 Buyurtma jarayoni

1. Foydalanuvchi "✅ Buyurtma berish" tugmasini bosadi
2. Bot 4 ta savolni beradi:
   - Ismingiz?
   - Telefon raqamingiz?
   - Qaysi to'plam kerak? (variantlar)
   - Qo'shimcha izoh bormi?
3. Buyurtma tasdiqlanadi
4. Admin telegram'da xabar oladi

## 💾 Ma'lumotlar saqlash

Hozirda bot xotiraga (RAM) ma'lumotlarni saqlaydi. Prodaksyon uchun database (MongoDB, PostgreSQL) ishlatish tavsiya etiladi.

## 🔧 Kod tuzilishi

```
sotuv bot/
├── bot.js                 # Asosiy bot fayli (barcha logika)
├── .env.example          # Muhit o'zgaruvchilari shabloni
├── package.json          # Loyihaning asosiy fayli
└── README.md            # Bu fayl
```

## 📝 Foydalanilgan Kutubxonalar

- **telegraf** - Telegram Bot API uchun
- **dotenv** - .env fayldan sozlamalarni o'qish

## ⚙️ Texnik ma'lumotlar

- **Node.js versiyasi:** v14 va yuqori
- **Telegraf versiyasi:** v4.15.0+
- **Ma'lumotlar saqlash:** In-memory (sessiya davomida)

## 🐛 Muammolarni hal qilish

### Bot ishlamaydi
- `.env` faylida BOT_TOKEN va ADMIN_CHAT_ID to'g'ri yozilganligini tekshiring
- Internet ulanishini tekshiring
- Bot tokenini @BotFather'dan yangilang

### Admin xabari kelib turmaydi
- ADMIN_CHAT_ID to'g'ri ekanligini tekshiring
- Admin botni avval ishga tushirsin (/start bossin)

### Rasmlari ko'rsatilmaydi
- Rasm URL'lari to'g'ri ekanligini tekshiring
- URL'lar to'liq URL bo'lishi kerak (https:// bilan boshlansa)
- Telegram'ning rasm formatlarini qo'llab-quvvatlaydi: JPG, PNG, GIF, WebP

## 👨‍💼 Muallif

- **Ism:** Nodira Abdullaevna
- **Telegram:** @Nodira_Abdullaevna
- **Telefon:** +998 (95) 058-91-81
- **Ish vaqti:** 09:00 - 18:00

## 📞 Bog'lanish

Savollar, taklif yoki xatolar haqida:
- Telegram: [@Nodira_Abdullaevna](https://t.me/Nodira_Abdullaevna)
- Telefon: [+998 (95) 058-91-81](tel:+998950589181)

## 📄 Litsenziya

MIT License

---

**O'zgartirilgan sana:** 2024-yil
