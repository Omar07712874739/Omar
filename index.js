// استيراد المكتبات
const express = require('express');
const dotenv = require('dotenv');
const tokenRoutes = require('./backend/routes/tokenRoutes');

// إعداد البيئة
dotenv.config();

// إنشاء التطبيق
const app = express();
const PORT = process.env.PORT || 3000;

// تسجيل المسارات
app.use('/api', tokenRoutes);

// نقطة البداية
app.get('/', (req, res) => {
  res.send('Welcome to Solana Token Tracker!');
});

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
