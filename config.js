'use strict'

module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/expense_control',
    SECRET_TOKEN: 'ElPu71$1m0Am0!'
}
