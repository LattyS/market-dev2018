const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const productSchema = new mongoose.Schema({
    title : { type : String, required : true },
    price : { type : Number, required : true },
    quantity : { type : Number, required : true }
}, { collection : 'products' })

module.exports = mongoose.model('Product', productSchema)