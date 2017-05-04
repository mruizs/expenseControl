'use strict'

const express = require('express')
const expenseCtrl = require('../controllers/expense')
const userCtrl = require('../controllers/auth')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/expense', expenseCtrl.getExpenses)
api.get('/expense/:expenseId', expenseCtrl.getExpense)
api.post('/expense', expenseCtrl.saveExpense)
api.put('/expense/:expenseId', expenseCtrl.updateExpense)
api.delete('/expense/:expenseId', expenseCtrl.deleteExpense)

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

api.get('/private', auth, function(req, res) {
  res.status(200).send({ message: 'Access granted' })
})

module.exports = api
