// Como as informações sobre os livros serão armazenadas no banco de dados
const mongoose = require('mongoose');

const MovieData = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  trailer_url: {
    type: String,
    required: true
  }
});

const Movie = mongoose.model('Movie', MovieData);
module.exports = Movie;