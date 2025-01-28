const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  publicKey: { type: String, required: true },
  data: { type: String, required: true },
  pumpCoin: { type: Boolean, default: false },
});

module.exports = mongoose.model('Token', tokenSchema);
