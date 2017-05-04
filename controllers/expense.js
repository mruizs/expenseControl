'use strict'

const Exp = require('../models/expense')

function getExpense(req, res) {
    let expenseId = req.params.expenseId

    Exp.findById(expenseId, (err, expense) => {
        if (err) return res.status(500).send({
            message: `Error when requesting the item: ${err}`
        })
        if (!expense) return res.status(404).send({
            message: 'Item does not exist'
        })

        res.status(200).send({
            expense
        })
    })
}

function getExpenses(req, res) {
    Exp.find({}, (err, expenses) => {
        if (err) return res.status(500).send({
            message: `Error when requesting items: ${err}`
        })
        if (!expenses) return res.status(404).send({
            message: 'Do not exist expenses'
        })

        res.status(200).send({
            expenses
        })
    })
}

function saveExpense(req, res) {

    let expense = new Exp()

    expense.name = req.body.name
    expense.amount = req.body.amount
    expense.category = req.body.category
    expense.date = req.body.date
    expense.description = req.body.description

    expense.save((err, expenseStored) => {
        if (err) res.status(500).send({
            message: `Error when saving into the db: ${err}`
        })

        res.status(200).send({
            expense: expenseStored
        })
    })
}

function updateExpense(req, res) {
    let expenseId = req.params.expenseId
    let update = req.body

    Exp.findByIdAndUpdate(expenseId, update, (err, expenseUpdated) => {
        if (err) return res.status(500).send({
            message: `Error when updating the item: ${err} `
        })

        res.status(200).send({
            expense: expenseUpdated
        })
    })
}

function deleteExpense(req, res) {
    let expenseId = req.params.productId

    Exp.findById(expenseId, (err, expense) => {
        if (err) return res.status(500).send({
            message: `Error when removing the item: ${err}`
        })

        res.status(200).send({
            message: 'Item has been removed'
        })
    })
}

module.exports = {
    getExpense,
    getExpenses,
    saveExpense,
    updateExpense,
    deleteExpense
}
