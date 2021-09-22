const express = require('express')
const router = require('./config/route')
const mongoose = require('./config/database')

const app = express()
const port = 3020

app.use(express.json())
app.use('/', router)

app.listen(port, ()=>{
    console.log('listening on port ',port)
})