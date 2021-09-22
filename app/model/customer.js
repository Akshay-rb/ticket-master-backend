const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    }
})

const customer = mongoose.model('Customer', customerSchema)

module.exports = customer