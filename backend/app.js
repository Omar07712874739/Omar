// backend/app.js
const express = require('express');
const dotenv = require('dotenv');
const twitterRoutes = require('./routes/twitterRoutes'); // استيراد المسار الجديد

dotenv.config(); // تحميل البيئة من ملف .env

const app = express();

// ربط المسار مع التطبيق
app.use('/api/twitter', twitterRoutes);

// بدء تشغيل الخادم على المنفذ 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
