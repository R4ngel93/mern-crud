require('dotenv').config();
const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, error => {
  return error ? console.warn(err.bgRed) : console.log('[MongoDB] connected to database \u2713 '.bgGreen);
});

module.exports = db;