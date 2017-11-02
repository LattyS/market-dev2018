const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

const Order = require('./models/Order.model')
const Customer = require('./models/Customer.model')
const Product = require('./models/Product.model')

app.get('/', (req, res) => {
    Order.find().populate('customer products').exec().then(orders => {
        res.render('index', {
            orders: orders
        })
    }).catch(err => res.render('error', {
        message: err.message
    }))
})

app.get('/order/:orderId', (req, res) => {
    Order.findById(req.params.orderId).populate('customer products').exec().then(order => {
        res.render('order', {
            order: order
        })
    }).catch(err => res.render('error', {
        message: err.message
    }))
})

app.get('/customer/:customerId', (req, res) => {
    Customer.findById(req.params.customerId).exec().then(customer => {
        res.render('customer', {
            customer: customer
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