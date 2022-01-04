const mongoose = require('mongoose');

const adSchema = mongoose.Schema({
  name: String,
  location: String,
  summary: String,
  date: Date
})

module.exports.Ad = mongoose.model('Ad', adSchema)