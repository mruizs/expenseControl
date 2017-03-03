'use strict'

const express = require('express')
const expenseCtrl = require('../controllers/expense')
const api = express.Router()

api.get('/expense', expenseCtrl.getExpenses)
api.get('/expense/:expenseId', expenseCtrl.getExpense)
api.post('/expense/:expenseId', expenseCtrl.saveExpense)
api.put('/expense/:expenseId', expenseCtrl.updateExpense)
api.delete('/expense/:expenseId', expenseCtrl.deleteExpense)

module.exports = api
