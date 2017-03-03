'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = Schema({
    name: String,
    amount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ['housing', 'transportation', 'dayly living', 'entertainment', 'health', 'holidays', 'recreation', 'others']
    },
    date: Date,
    description: String
})

module.exports = mongoose.model('Expense', expenseSchema)
