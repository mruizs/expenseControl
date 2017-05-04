'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function signUp (req, res) {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  user.save((err) => {
    if (err) res.status(500).send({ message: `Error when creating the user: ${err}` })

    return res.status(200).send({ token: service.createToken(user) })
  })
}

function signIn (req, res) {
  User.find({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user) return res.status(404).send({ message: 'User does not exist' })

    req.user = user
    res.status(200).send({
      message: 'Logged correctly',
      token: service.createToken(user)
    })
  })
}

module.exports = {
  signUp,
  signIn
}
