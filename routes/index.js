'use strict'

const express = require('express')
const expenseCtrl = require('../controllers/expense')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/expense', expenseCtrl.getExpenses)
api.get('/expense/:expenseId', expenseCtrl.getExpense)
api.post('/expense/:expenseId', expenseCtrl.saveExpense)
api.put('/expense/:expenseId', expenseCtrl.updateExpense)
api.delete('/expense/:expenseId', expenseCtrl.deleteExpense)

api.get('/private', auth, function(req, res) {
  res.status(200).send({ message: 'Access granted' })
})

module.exports = api
