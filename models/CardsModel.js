const mongoose = require('mongoose')
// let Schema = mongoose.Schema


const CardSchema = new mongoose.Schema({
  _id:{
    type:String
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

mongoose.model('cards', CardSchema)
