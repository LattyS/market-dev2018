const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const customerSchema = new mongoose.Schema({
    gender : { type : String, required : true },
    firstname : { type : String, required : true },
    lastname : { type : String, required : true },
    email : { type : String, required : true },
    phone : { type : String, required : true },
    birthdate : { type : String, required : true },
    city : { type : String, required : true },
    country : { type : String, required : true },
    photo : { type : String }
}, { collection : 'customers' })

module.exports = mongoose.model('Customer', customerSchema)