// Inicializando aplicação
const express = require('express')
const mongoose = require('mongoose')
const Movie = require('./models/movieModel')

const app = express()

// Permite leitura de dados json recebidos
app.use(express.json())

// Determina porta para comunicação
const port = 3000

// CRUD
app.get('/', async (req, res) => {
  const films = await Movie.find()
  return res.send(films)
})

app.post('/', async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url
  })

  await movie.save()
  return res.send(movie)
})

app.delete('/:id', async (req, res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id)
  return res.send(movie)
})

app.put('/:id', async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url
  }, { 
    new: true 
  })

  return res.send(movie)
})

app.listen(port, () => {
  // Conecta com banco de dados a partir da url gerada no MongoDB (deve se colocar a senha do banco no endereço)
  mongoose.connect('mongodb+srv://dayanecamilelima:8TqsWU77ThBuKCS7@cluster0.hxfw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

  console.log(`Listening on port ${port}`)
})