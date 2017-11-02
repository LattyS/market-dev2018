const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    dateOrdered : { type: Date, default : Date.now, required:true},
    customer : { type: ObjectId, ref: 'Customer' },
    products : [ { type : ObjectId, ref : 'Product' } ]
}, { collection : 'orders' })

module.exports = mongoose.model('Order', orderSchema)