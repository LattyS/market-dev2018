const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

const Order = require('./models/Order.model')

app.get('/', (req, res) => {
    Order.find().exec().then(orders => {
        res.render('index', {
            orders : orders
        })
    }).catch(err => res.render('error', {
        message: err.message
    }))
})

mongoose.Promise = global.Promise;

mongoose
    .connect('mongodb://localhost/market', {
        useMongoClient: true
    })
    .then(() => app.listen(1337, () => console.log('App started on http://localhost:1337')))