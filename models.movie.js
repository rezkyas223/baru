
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  director: String,
});

module.exports = mongoose.model('Movie', MovieSchema);
