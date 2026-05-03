// Telegram Sotuv Manager Bot
// Node.js va Telegraf kutubxonasida yozilgan

const { Telegraf, Markup } = require('telegraf');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// .env fayldan sozlamalarni o'qish
dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID;

// Bot boshlang'ich sozlamalar
const bot = new Telegraf(BOT_TOKEN);

// Foydalanuvchi ma'lumotlari saqlash (In-memory storage)
// Prodaksyon uchun database ishlatish tavsiya etiladi
const users = new Map();
const stats = {
  totalUsers: 0,
  totalOrders: 0,
  orders: []
};

// ========== DATA STRUKTURALARI ==========

// To'plam ma'lumotlari (Qo'g'irchoq tikilish to'plamlari)
const sets = [
  {
    id: 1,
    name: '1. Klara to\'plami',
    price: 160000,
    image: path.join(__dirname, 'images', 'photo_2026-05-02_19-01-19.jpg')
  },
  {
    id: 2,
    name: '2. Alisa to\'plami',
    price: 170000,
    image: path.join(__dirname, 'images', 'photo_2026-05-02_19-01-30.jpg')
  },
  {
    id: 3,
    name: '3. Zara to\'plami',
    price: 150000,
    image: path.join(__dirname, 'images', 'photo_2026-05-02_19-01-44.jpg')
  },
  {
    id: 4,
    name: '4. Ella to\'plami',
    price: 150000,
    image: path.join(__dirname, 'images', 'photo_2026-05-02_19-01-55.jpg')
  },
  {
    id: 5,
    name: '5. Ro\'za to\'plami',
    price: 150000,
    image: path.join(__dirname, 'images', 'photo_2026-05-02_19-02-15.jpg')
  },
  {
    id: 6,
    name: '6. Liza to\'plami',
    price: 350000,
    image: path.join(__dirname, 'images', 'photo_2026-05-02_19-02-24.jpg')
  }
];

// Materiallar (Matolar)
const materials = {
  matolar: [
    { id: 1, name: 'Kukolniy trikotaj 0,5 yarim metr', price: 35000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-02-38.jpg') },
    { id: 2, name: 'Alisa uchun to\'plam matolari +furnitura', price: 55000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-05-08.jpg') },
    { id: 3, name: 'Klara uchun to\'plam matosi +furnitura', price: 45000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-05-20.jpg') },
    { id: 4, name: 'Zara uchun to\'plam matosi + furnitura', price: 45000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-05-32.jpg') },
    { id: 5, name: 'Roza uchun to\'plam matosi + furnitura', price: 45000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-05-42.jpg') },
    { id: 6, name: 'Ella uchun to\'plam matosi + furnitura', price: 40000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-05-53.jpg') }
  ],
  
  sochlar: [
    { id: 101, name: 'To\'q jigarrang 25 smli sochlar', price: 23000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-06-08.jpg') },
    { id: 102, name: 'Kashtan rangli 25 smli sochlar', price: 23000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-06-28.jpg') },
    { id: 103, name: 'Sariq soch 25 sm', price: 23000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-06-38.jpg') },
    { id: 104, name: 'To\'q jigarrang 15 smli', price: 18000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-07-08.jpg') },
    { id: 105, name: 'Sariq soch 15 smli', price: 18000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-07-18.jpg') },
    { id: 106, name: 'To\'q jigarrang soch 5 smli', price: 12000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-07-31.jpg') },
    { id: 107, name: 'To\'q Kashtan soch 5 smli', price: 12000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-07-42.jpg') },
    { id: 108, name: 'Pushti soch 25 smli', price: 23000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-07-50.jpg') },
    { id: 109, name: 'Siyoxrang soch 25 smli', price: 23000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-08-04.jpg') },
    { id: 110, name: 'To\'lqin kashtan soch 20 sm', price: 25000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-08-13.jpg') },
    { id: 111, name: 'To\'lqin russiy 15 smli', price: 20000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-08-22.jpg') },
    { id: 112, name: 'Lokon kashtan rang, 15 sm', price: 25000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-08-33.jpg') }
  ],
  
  oyoqKiyim: [
    { id: 201, name: '5 smli och pushti keda', price: 20000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-08-42.jpg') },
    { id: 202, name: 'To\'q pushti keda', price: 20000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-08-51.jpg') },
    { id: 203, name: 'Qora keda', price: 20000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-09-03.jpg') },
    { id: 204, name: 'Havorang keda', price: 20000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-09-11.jpg') },
    { id: 205, name: 'Keda siyoxrang', price: 20000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-09-20.jpg') },
    { id: 206, name: 'Sandal 5,5 smli, pushti', price: 25000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-09-27.jpg') }
  ],
  
  aksessuarlar: [
    { id: 301, name: 'Tugmacha 18 mmli', price: 300, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-09-36.jpg') },
    { id: 302, name: 'Tugmacha 12 mmli', price: 200, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-09-46.jpg') },
    { id: 303, name: 'Remen regulyator', price: 1000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-09-59.jpg') },
    { id: 304, name: 'Qora ko\'z 8 mmli (1 pachka)', price: 6000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-10-16.jpg') },
    { id: 305, name: 'Qora ko\'z 4 mmli (1 pachka)', price: 5000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-10-24.jpg') },
    { id: 306, name: 'Kipriklar 8 mmli', price: 13000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-10-33.jpg') },
    { id: 307, name: 'Metall knopka (sumka uchun)', price: 1000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-10-47.jpg') },
    { id: 308, name: 'Termonakleyka 12 smga', price: 12000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-10-55.jpg') },
    { id: 309, name: 'Ko\'zli yuz termonakleykasi (dona)', price: 3000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-11-02.jpg') },
    { id: 310, name: 'Kiprikli yuz', price: 3000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-11-19.jpg') },
    { id: 311, name: 'Jung igna 9 smli', price: 1500, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-11-59.jpg') },
    { id: 312, name: 'Oq jung 50 gr', price: 35000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-12-07.jpg') },
    { id: 313, name: 'Dermantin 30x30 smli havorang +pushti (2 ta)', price: 18000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-12-16.jpg') },
    { id: 314, name: 'Zanjir 3 mmli (1 metr)', price: 4000, image: path.join(__dirname, 'images', 'termonakleyka web.jpg') },
    { id: 315, name: 'Metal knopka (sarafan uchun, 1 juft)', price: 4000, image: path.join(__dirname, 'images', 'photo_2026-05-02_16-06-08.jpg') },
    { id: 316, name: 'Oq quyoncha 6 smli', price: 9000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-00-46.jpg') },
    { id: 317, name: 'Xalqa 6 mmli (1 pachka)', price: 9000, image: path.join(__dirname, 'images', 'photo_2026-05-02_19-02-50.jpg') }
  ]
};

// ========== YORDAMCHI FUNKTSIYALAR ==========

// Foydalanuvchining savat ma'lumotlarini oling
function getUserCart(userId) {
  if (!users.has(userId)) {
    users.set(userId, {
      cart: [],
      orders: []
    });
  }
  return users.get(userId);
}

// Savatni o'qish
function getCartSummary(userId) {
  const userData = getUserCart(userId);
  const cart = userData.cart;
  
  if (cart.length === 0) {
    return 'Savat bo\'sh ❌';
  }
  
  let summary = '🛒 <b>Savat:</b>\n\n';
  let totalPrice = 0;
  
  cart.forEach((item, index) => {
    summary += `${index + 1}. ${item.name}\n   Narxi: ${item.price.toLocaleString()} so\'m\n   Soni: ${item.quantity}\n   Jami: ${(item.price * item.quantity).toLocaleString()} so\'m\n\n`;
    totalPrice += item.price * item.quantity;
  });
  
  summary += `<b>Jami Narx: ${totalPrice.toLocaleString()} so\'m</b>`;
  
  return summary;
}

// FAQ
const faq = [
  {
    question: 'Video darsliklar qanday formatda bo\'ladi?',
    answer: 'Onlayn formatda'
  },
  {
    question: 'Qanday uslubda olish mumkin?',
    answer: 'Toshkent bo\'ylab Yandex orqali'
  },
  {
    question: 'Viloyatlar bo\'ylab necha kunada?',
    answer: '1 kundan 3 kungacha BTS pochta orqali'
  },
  {
    question: 'To\'lov usuli qanday?',
    answer: 'Karta orqali oldindan to\'lov'
  }
];

// ========== BOT KOMANDALAR ==========

// /start komandasi - Botni boshlang'ich salomlashish
bot.command('start', (ctx) => {
  const userId = ctx.from.id;
  const firstName = ctx.from.first_name;
  
  // Foydalanuvchini statistikaga qo'shish
  if (!users.has(userId)) {
    stats.totalUsers++;
  }
  getUserCart(userId);
  
  // Salomlashish xabari
  const welcomeMessage = `Assalamu alaikum, ${firstName}! 👋

Siz beshlamchi masterlikni o'rganmoqchi bo'lgan odam sifatida o'z ijodkorligi uchun kerakli to'plamlar va materiallarni topasiz.

7 yillik hunarmand master sifatida, sizga eng sifatli mahsulotlarni taklif qilyapman. Quyidagi menyudan tanlang:`;

  ctx.reply(welcomeMessage, Markup
    .keyboard([
      [Markup.button.text('📚 Bepul darslik')],
      [Markup.button.text('🎁 To\'plamlar')],
      [Markup.button.text('🛍️ Kerakli mahsulotlar')],
      [Markup.button.text('🛒 Savat')],
      [Markup.button.text('✅ Buyurtma berish')],
      [Markup.button.text('❓ Savollar (FAQ)')],
      [Markup.button.text('☎️ Bog\'lanish')]
    ])
    .resize()
  );
});

// /admin komandasi - Admin paneli
bot.command('admin', async (ctx) => {
  const userId = ctx.from.id;
  
  // Admin tekshiruvi (ADMIN_CHAT_ID bilan taqqoslash)
  if (userId.toString() !== ADMIN_CHAT_ID) {
    ctx.reply('❌ Siz admin emassiz!');
    return;
  }
  
  const adminMessage = `
📊 <b>ADMIN PANELI</b>

👥 Jami foydalanuvchilar: ${stats.totalUsers}
📦 Jami buyurtmalar: ${stats.totalOrders}

Yangi buyurtmalar:
${stats.orders.length > 0 ? stats.orders.map((o, i) => `${i + 1}. ${o.name} - ${o.product}`).join('\n') : 'Buyurtma yo\'q'}
`;
  
  ctx.replyWithHTML(adminMessage);
});

// ========== TUGMA BOSILGAN VAQTLAR ==========

// 📚 Bepul darslik
bot.hears('📚 Bepul darslik', async (ctx) => {
  const message = `Salom! 7 yillik hunarmand master sifatida, ijodkorlikka qiziqish bildirayotganligingizdan hursandman! 🎉

Marhamat bepul darslikni oling:`;
  
  ctx.reply(message);

  // Local image file in the images/ folder
  const masterPhotoPath = path.join(__dirname, 'images', 'photo_2026-05-02_19-11-11.jpg');
  if (fs.existsSync(masterPhotoPath)) {
    try {
      await ctx.replyWithPhoto({ source: fs.createReadStream(masterPhotoPath) }, { caption: '📸 Masterning suratini ko\'ring' });
    } catch (error) {
      console.error('Rasmni yuborishda xato:', error);
      await ctx.reply('⚠️ Rasmni yuborishda xato bo‘ldi. Iltimos, qayta urinib ko‘ring.');
    }
  } else {
    console.error('Rasm topilmadi:', masterPhotoPath);
    await ctx.reply('⚠️ Rasm topilmadi. Iltimos, fayl nomini tekshiring.');
  }
  
  // Link button
  ctx.reply(
    'Batafsil darslik uchun kanalga o\'ting:',
    Markup.inlineKeyboard([
      Markup.button.url('📹 Darslikni ko\'rish', 'https://t.me/master_tkaniart/543')
    ])
  );
});

// 🎁 To'plamlar - rasmlari bilan
bot.hears('🎁 To\'plamlar', async (ctx) => {
  ctx.reply('🎁 <b>Qo\'g\'irchoq tikish to\'plamlari:</b>\n\nHar bir to\'plam uchun rasm va narx:', { parse_mode: 'HTML' });
  
  // Har bir to'plam uchun alohida rasm va ma'lumot yuborish
  for (const set of sets) {
    const caption = `<b>${set.name}</b>\n\n💰 <b>Narxi: ${set.price.toLocaleString()} so\'m</b>`;
    
    try {
      // Fayl mavjudligini tekshirish
      if (fs.existsSync(set.image)) {
        // Local faylni yuborish
        await ctx.replyWithPhoto(
          { source: fs.createReadStream(set.image) },
          {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [{ text: '🛒 Savatga qo\'shish', callback_data: `add_set_${set.id}` }],
                [{ text: 'ℹ️ Batafsil', callback_data: `info_set_${set.id}` }]
              ]
            }
          }
        );
      } else {
        // Rasm topilmasa, faqat text yuborish
        await ctx.replyWithHTML(caption, Markup.inlineKeyboard([
          [Markup.button.callback('🛒 Savatga qo\'shish', `add_set_${set.id}`)],
          [Markup.button.callback('ℹ️ Batafsil', `info_set_${set.id}`)]
        ]));
        console.error('Rasm topilmadi:', set.image);
      }
    } catch (err) {
      // Agar rasm yuborish muvaffaqiyatsiz bo'lsa, faqat text yuborish
      console.error('Rasmni yuborishda xato:', err);
      await ctx.replyWithHTML(caption, Markup.inlineKeyboard([
        [Markup.button.callback('🛒 Savatga qo\'shish', `add_set_${set.id}`)],
        [Markup.button.callback('ℹ️ Batafsil', `info_set_${set.id}`)]
      ]));
    }
  }
});

// To'plamni savatga qo'shish
bot.action(/add_set_(\d+)/, (ctx) => {
  const setId = parseInt(ctx.match[1]);
  const userId = ctx.from.id;
  const set = sets.find(s => s.id === setId);
  
  if (set) {
    const userData = getUserCart(userId);
    const existingItem = userData.cart.find(item => item.id === set.id && item.type === 'set');
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      userData.cart.push({
        id: set.id,
        name: set.name,
        price: set.price,
        quantity: 1,
        type: 'set'
      });
    }
    
    ctx.answerCbQuery(`✅ "${set.name}" savatga qo'shildi!`);
  }
});

// To'plam haqida batafsil ma'lumot
bot.action(/info_set_(\d+)/, (ctx) => {
  const setId = parseInt(ctx.match[1]);
  const set = sets.find(s => s.id === setId);
  
  if (set) {
    const infoMessage = `ℹ️ <b>${set.name} haqida:</b>\n\n💰 <b>Narxi:</b> ${set.price.toLocaleString()} so\'m\n\n📝 <b>Tarkibi:</b>\nBu to'plam qo'g'irchoq tikish uchun barcha kerakli materiallarni o'z ichiga oladi.\n\n✨ <b>Sifati:</b> Eng yaxshi sifatdagi materiallar ishlatilgan.\n\n📱 <b>Bog'lanish:</b> Batafsil ma'lumot uchun ☎️ Bog'lanish tugmasini bosing.`;
    
    ctx.replyWithHTML(infoMessage, Markup.inlineKeyboard([
      [Markup.button.callback('🛒 Savatga qo\'shish', `add_set_${set.id}`)],
      [Markup.button.url('☎️ Telegramda yozing', 'https://t.me/Nodira_Abdullaevna')]
    ]));
    ctx.answerCbQuery();
  }
});

// 🛍️ Kerakli mahsulotlar
bot.hears('🛍️ Kerakli mahsulotlar', (ctx) => {
  const message = '🛍️ <b>Mahsulot bo\'limlari:</b>\n\nQaysi bo\'limni ko\'rmoqchi?';
  
  ctx.replyWithHTML(message, Markup.inlineKeyboard([
    [Markup.button.callback('🧵 Matolar', 'section_matolar')],
    [Markup.button.callback('💇 Sochlar', 'section_sochlar')],
    [Markup.button.callback('👟 Oyoq kiyim', 'section_oyoq_kiyim')],
    [Markup.button.callback('✨ Aksessuarlar', 'section_aksessuarlar')]
  ]));
});

// Matolar bo'limi - rasmlari bilan
bot.action('section_matolar', async (ctx) => {
  ctx.answerCbQuery();
  ctx.reply('🧵 <b>Matolar:</b>\n\nHar bir mahsulot uchun rasm va narx:', { parse_mode: 'HTML' });
  
  // Har bir mahsulot uchun alohida rasm yuborish
  for (const item of materials.matolar) {
    const caption = `<b>${item.name}</b>\n\n💰 <b>Narxi: ${item.price.toLocaleString()} so\'m</b>`;
    
    try {
      if (fs.existsSync(item.image)) {
        await ctx.replyWithPhoto(
          { source: fs.createReadStream(item.image) },
          {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [{ text: '🛒 Savatga qo\'shish', callback_data: `add_product_${item.id}` }]
              ]
            }
          }
        );
      } else {
        await ctx.replyWithHTML(caption, Markup.inlineKeyboard([
          [Markup.button.callback('🛒 Savatga qo\'shish', `add_product_${item.id}`)]
        ]));
        console.error('Rasm topilmadi:', item.image);
      }
    } catch (err) {
      console.error('Rasmni yuborishda xato:', err);
      await ctx.replyWithHTML(caption, Markup.inlineKeyboard([
        [Markup.button.callback('🛒 Savatga qo\'shish', `add_product_${item.id}`)]
      ]));
    }
  }
});

// Sochlar bo'limi - rasmlari bilan
bot.action('section_sochlar', async (ctx) => {
  ctx.answerCbQuery();
  ctx.reply('💇 <b>Sochlar:</b>\n\nHar bir rang va o\'lcham uchun rasm:', { parse_mode: 'HTML' });
  
  // Har bir soch uchun alohida rasm yuborish
  for (const item of materials.sochlar) {
    const caption = `<b>${item.name}</b>\n\n💰 <b>Narxi: ${item.price.toLocaleString()} so\'m</b>`;
    
    try {
      if (fs.existsSync(item.image)) {
        await ctx.replyWithPhoto(
          { source: fs.createReadStream(item.image) },
          {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [{ text: '🛒 Savatga qo\'shish', callback_data: `add_product_${item.id}` }]
              ]
            }
          }
        );
      } else {
        await ctx.replyWithHTML(caption, Markup.inlineKeyboard([
          [Markup.button.callback('🛒 Savatga qo\'shish', `add_product_${item.id}`)]
        ]));
        console.error('Rasm topilmadi:', item.image);
      }
    } catch (err) {
      console.error('Rasmni yuborishda xato:', err);
      await ctx.replyWithHTML(caption, Markup.inlineKeyboard([
        [Markup.button.callback('🛒 Savatga qo\'shish', `add_product_${item.id}`)]
      ]));
    }
  }
});

// Oyoq kiyim bo'limi - rasmlari bilan
bot.action('section_oyoq_kiyim', async (ctx) => {
  ctx.answerCbQuery();
  ctx.reply('👟 <b>Oyoq kiyim:</b>\n\nHar bir model va rang uchun rasm:', { parse_mode: 'HTML' });
  
  // Har bir kiyim uchun alohida rasm yuborish
  for (const item of materials.oyoqKiyim) {
    const caption = `<b>${item.name}</b>\n\n💰 <b>Narxi: ${item.price.toLocaleString()} so\'m</b>`;
    
    try {
      if (fs.existsSync(item.image)) {
        await ctx.replyWithPhoto(
          { source: fs.createReadStream(item.image) },
          {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [{ text: '🛒 Savatga qo\'shish', callback_data: `add_product_${item.id}` }]
              ]
            }
          }
        );
      } else {
        await ctx.replyWithHTML(caption, Markup.inlineKeyboard([
          [Markup.button.callback('🛒 Savatga qo\'shish', `add_product_${item.id}`)]
        ]));
        console.error('Rasm topilmadi:', item.image);
      }
    } catch (err) {
      console.error('Rasmni yuborishda xato:', err);
      await ctx.replyWithHTML(caption, Markup.inlineKeyboard([
        [Markup.button.callback('🛒 Savatga qo\'shish', `add_product_${item.id}`)]
      ]));
    }
  }
});

// Aksessuarlar bo'limi - rasmlari bilan
bot.action('section_aksessuarlar', async (ctx) => {
  ctx.answerCbQuery();
  ctx.reply('✨ <b>Aksessuarlar:</b>\n\nHar bir aksessuarning rasm va narxi:', { parse_mode: 'HTML' });
  
  // Har bir aksessuarning alohida rasm yuborish
  for (const item of materials.aksessuarlar) {
    const caption = `<b>${item.name}</b>\n\n💰 <b>Narxi: ${item.price.toLocaleString()} so\'m</b>`;
    
    try {
      if (fs.existsSync(item.image)) {
        await ctx.replyWithPhoto(
          { source: fs.createReadStream(item.image) },
          {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [{ text: '🛒 Savatga qo\'shish', callback_data: `add_product_${item.id}` }]
              ]
            }
          }
        );
      } else {
        await ctx.replyWithHTML(caption, Markup.inlineKeyboard([
          [Markup.button.callback('🛒 Savatga qo\'shish', `add_product_${item.id}`)]
        ]));
        console.error('Rasm topilmadi:', item.image);
      }
    } catch (err) {
      console.error('Rasmni yuborishda xato:', err);
      await ctx.replyWithHTML(caption, Markup.inlineKeyboard([
        [Markup.button.callback('🛒 Savatga qo\'shish', `add_product_${item.id}`)]
      ]));
    }
  }
});

// Mahsulotni savatga qo'shish (umumiy)
bot.action(/add_product_(\d+)/, (ctx) => {
  const productId = parseInt(ctx.match[1]);
  const userId = ctx.from.id;
  
  // Barcha kategoriyalardan izlash
  let product = null;
  let category = null;
  
  for (const [cat, items] of Object.entries(materials)) {
    const found = items.find(item => item.id === productId);
    if (found) {
      product = found;
      category = cat;
      break;
    }
  }
  
  if (product) {
    const userData = getUserCart(userId);
    const existingItem = userData.cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      userData.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        type: 'product'
      });
    }
    
    ctx.answerCbQuery(`✅ "${product.name}" savatga qo'shildi!`);
  }
});

// 🛒 Savat
bot.hears('🛒 Savat', (ctx) => {
  const userId = ctx.from.id;
  const userData = getUserCart(userId);
  
  if (userData.cart.length === 0) {
    ctx.replyWithHTML('🛒 Savat bo\'sh ❌\n\nMahsulot qo\'shishni boshlang!');
    return;
  }
  
  const cartSummary = getCartSummary(userId);
  
  ctx.replyWithHTML(cartSummary, Markup.inlineKeyboard([
    [Markup.button.callback('🗑️ Savatni tozalash', `clear_cart_${userId}`)],
    [Markup.button.callback('⬅️ Orqaga', 'back_to_menu')]
  ]));
});

// Savatni tozalash
bot.action(/clear_cart_(\d+)/, (ctx) => {
  const userId = parseInt(ctx.match[1]);
  const userData = getUserCart(userId);
  userData.cart = [];
  
  ctx.answerCbQuery('🗑️ Savat tozalandi!');
  ctx.editMessageText('🛒 Savat bo\'sh ✓');
});

// Menyu orqaga
bot.action('back_to_menu', (ctx) => {
  ctx.answerCbQuery();
  ctx.scene.leave();
});

// ✅ Buyurtma berish
bot.hears('✅ Buyurtma berish', (ctx) => {
  const userId = ctx.from.id;
  const userData = getUserCart(userId);
  
  if (userData.cart.length === 0) {
    ctx.reply('❌ Savat bo\'sh! Avval mahsulot tanlang.');
    return;
  }
  
  // Buyurtma formasini boshlash
  userData.orderForm = {
    step: 1
  };
  
  ctx.reply('📋 <b>Buyurtma formasini to\'ldiring:</b>\n\n1️⃣ Ismingiz?', { parse_mode: 'HTML' });
});

// Matn xabarlarni qabul qilish (buyurtma formasini to'ldirish)
bot.on('text', (ctx) => {
  const userId = ctx.from.id;
  const userData = getUserCart(userId);
  const text = ctx.message.text;
  
  // Agar buyurtma formasini to'ldirmoqchi bo'lsa
  if (userData.orderForm && userData.orderForm.step === 1) {
    userData.orderForm.name = text;
    userData.orderForm.step = 2;
    ctx.reply('2️⃣ Telefon raqamingiz?');
  } else if (userData.orderForm && userData.orderForm.step === 2) {
    userData.orderForm.phone = text;
    userData.orderForm.step = 3;
    
    // To'plam tanlash
    let message = '3️⃣ Qaysi to\'plam kerak?\n\n';
    sets.forEach(set => {
      message += `• ${set.name} - ${set.price.toLocaleString()} so\'m\n`;
    });
    
    ctx.reply(message, Markup.inlineKeyboard([
      ...sets.map(set => [Markup.button.callback(set.name, `order_set_${set.id}`)])
    ]));
  } else if (userData.orderForm && userData.orderForm.step === 4) {
    userData.orderForm.notes = text || 'Yo\'q';
    userData.orderForm.step = 5;
    
    // Buyurtmani tasdiqlab yuborish
    finalizrOrder(ctx, userId, userData);
  }
});

// To'plam tanlangan vaqt
bot.action(/order_set_(\d+)/, (ctx) => {
  const setId = parseInt(ctx.match[1]);
  const userId = ctx.from.id;
  const userData = getUserCart(userId);
  const set = sets.find(s => s.id === setId);
  
  if (userData.orderForm) {
    userData.orderForm.selectedSet = set.name;
    userData.orderForm.step = 4;
    ctx.answerCbQuery();
    ctx.reply('4️⃣ Qo\'shimcha izoh bormi? (Yoki "yo\'q" deb yozing)');
  }
});

// Buyurtmani yakuniy qilish
function finalizrOrder(ctx, userId, userData) {
  const orderInfo = userData.orderForm;
  const cartSummary = getCartSummary(userId);
  
  // Botga javob
  const confirmMessage = `✅ <b>Buyurtmangiz qabul qilindi!</b>\n\n📋 Tez orada aloqaga chiqamiz.\n\n<b>Buyurtma ma'lumotlari:</b>\n• Ism: ${orderInfo.name}\n• Telefon: ${orderInfo.phone}\n• To'plam: ${orderInfo.selectedSet}\n• Qo'shimcha: ${orderInfo.notes}`;
  
  ctx.replyWithHTML(confirmMessage);
  
  // Adminga xabar yuborish
  const adminNotification = `🔔 <b>YANGI BUYURTMA!</b>\n\n👤 Ism: ${orderInfo.name}\n📱 Telefon: ${orderInfo.phone}\n🎁 To'plam: ${orderInfo.selectedSet}\n📝 Qo'shimcha: ${orderInfo.notes}\n\n${cartSummary}`;
  
  bot.telegram.sendMessage(ADMIN_CHAT_ID, adminNotification, { parse_mode: 'HTML' }).catch(err => {
    console.error('Admin xabar yuborishda xatolik:', err);
  });
  
  // Statistikani yangilash
  stats.totalOrders++;
  stats.orders.push({
    name: orderInfo.name,
    product: orderInfo.selectedSet,
    phone: orderInfo.phone,
    date: new Date().toLocaleString('uz-UZ')
  });
  
  // Buyurtma formani o'chirish
  userData.orderForm = null;
  userData.cart = [];
}

// ❓ Savollar (FAQ)
bot.hears('❓ Savollar (FAQ)', (ctx) => {
  let message = '❓ <b>Ko\'p beriladigan savollar:</b>\n\n';
  
  faq.forEach((item, index) => {
    message += `<b>${index + 1}. ${item.question}</b>\n📌 ${item.answer}\n\n`;
  });
  
  ctx.replyWithHTML(message);
});

// ☎️ Bog'lanish
bot.hears('☎️ Bog\'lanish', (ctx) => {
  const contactMessage = `☎️ <b>Bizning kontaktlar:</b>\n\n📱 <b>Telegram:</b> @Nodira_Abdullaevna\n📞 <b>Telefon:</b> +998 (95) 058-91-81\n⏰ <b>Ish vaqti:</b> 09:00 - 18:00`;
  
  ctx.replyWithHTML(contactMessage, Markup.inlineKeyboard([
    [Markup.button.url('💬 Telegramda yozing', 'https://t.me/Nodira_Abdullaevna')]
  ]));
});

// ========== XATOLIK BOSHQARUVI ==========

// Noma'lum xabar
bot.on('message', (ctx) => {
  ctx.reply('😕 Kechirasiz, men buni tushunmadim. Iltimos, menyudan tugma tanlang yoki /start bosing.');
});

// ========== BOT ISHGA TUSHIRISH ==========

bot.launch();

console.log('🤖 Bot muvaffaqiyatli ishga tushdi!');
console.log(`⏰ Vaqt: ${new Date().toLocaleString('uz-UZ')}`);

// Процессни to'xtatish
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
