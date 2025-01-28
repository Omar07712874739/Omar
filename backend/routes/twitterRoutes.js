// backend/routes/twitterRoutes.js
const express = require('express');
const { getTweets } = require('../controllers/twitterController');

const router = express.Router();

// مسار لجلب التغريدات بناءً على استعلام البحث
router.get('/tweets', getTweets);

module.exports = router;
