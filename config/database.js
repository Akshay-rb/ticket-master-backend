const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/ticket-master', {useNewUrlParser : true})
        .then(()=>{
            console.log('successfully connected to db')
        })
        .catch((err)=>{
            console.log(err)
        })

module.exports = mongoose