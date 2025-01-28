const { fetchTweets } = require('../services/twitterService');

const getTweets = async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const tweets = await fetchTweets(query);
    return res.json({ tweets });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching tweets' });
  }
};

module.exports = { getTweets };
