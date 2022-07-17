const { Schema, model } = require('mongoose')

const MovieSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name of movie is required'],
    unique: true
  },
  category: {
    type: String,
    required: [true, 'category is required']
  },
  premier: {
    type: Date,
    required: ['true', 'date premier is required']
  },
  price: {
    type: Number,
    required: [true, 'price of movie is required'],
    default: 0
  },
  units: {
    type: Number,
    required: [true, 'number of units is required'],
    default: 0
  },
  state: {
    type: Boolean,
    default: true
  }
})

MovieSchema.methods.toJSON = function () {
  const { __v, _id, ...movie } = this.toObject()
  return movie
}

module.exports = model('Movie', MovieSchema)
