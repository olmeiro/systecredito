const supertest = require('supertest')
const mongoose = require('mongoose')
const { request, response } = require('express')
const Server = require('../models/server')
const router = require('../routes/movies')

const api = supertest(router)
 
const server = new Server()

const Movie = require('../models/movie')

const initialMovies = [
  {   
    "name": "sin regreso",
    "category": "drama",
    "premier": "2008/05/12",
    "price": 5000,
    "units": 100,
  },
  {   
    "name": "superman",
    "category": "drama",
    "premier": "2012/04/16",
    "price": 5000,
    "units": 100,
  },
]

beforeEach( async () => {
  await Movie.deleteMany({})

  const movie1 = new Movie(initialMovies[0])
  await movie1.save()
 
  const movie2 = new Movie(initialMovies[1])
  await movie2.save()
})

test('movies are returned ad json', async () => { 
  jest.setTimeout(10000)
  await api
    .get('/all')
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

test('there are 2 movies', async () => { 
  jest.setTimeout(10000)
  const response = await api.get('/all')
  expect(response.body).toHaveLength(initialMovies.length)
 })

 afterAll(() => {
   mongoose.connection.close()
  server.app.close
 })