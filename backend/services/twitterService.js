// backend/services/twitterService.js
const axios = require('axios');
const cheerio = require('cheerio');

// دالة لجلب التغريدات من تويتر باستخدام Scraping
const fetchTweets = async (query) => {
  const url = `https://twitter.com/search?q=${encodeURIComponent(query)}&f=live`;
  try {
    const { data } = await axios.get(url); // جلب البيانات من تويتر
    const $ = cheerio.load(data); // تحليل البيانات باستخدام cheerio
    const tweets = [];

    // استخراج النصوص الخاصة بالتغريدات
    $('.css-901oao').each((_, element) => {
      const tweet = $(element).text();
      if (tweet) tweets.push(tweet); // إضافة التغريدة إلى المصفوفة
    });

    return tweets; // إرجاع التغريدات
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    return []; // في حال حدوث خطأ، إرجاع مصفوفة فارغة
  }
};

module.exports = { fetchTweets };
