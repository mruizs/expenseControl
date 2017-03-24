'use strict'

const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'eMail field is required'],
    validate: [ isEmail, 'invalid email']
  }
})

const User = mongoose.model('user', userSchema)

module.exports = User
