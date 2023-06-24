const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shortenURLSchema = new Schema({
  shortenURL: {
    type: String,
    required: true
  },
  originURL: {
    type:String,
    required: true
  }
})

module.exports = mongoose.model('shortURL', shortenURLSchema)