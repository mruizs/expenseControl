'use strict'

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const userSchema = new Schema({
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
  },
  password: {
    type: String,
    select: false
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  },
  lastLogin: Date
})

userSchema.pre('save', (next) => {
  let user = this
  if (!user.isModified('password')) return next()

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next()

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})
const User = mongoose.model('user', userSchema)

module.exports = User
