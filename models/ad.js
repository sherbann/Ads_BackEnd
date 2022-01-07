const { Date } = require('mongoose');
const mongoose = require('mongoose');

const adSchema = mongoose.Schema({
  event: String,
  location: String,
  summary: String,
  date: String,
  time: String
})

module.exports.Ad = mongoose.model('Ad', adSchema)