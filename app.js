const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
    console.log('mongodb error')
})
db.once('open', () => {
    console.log('mongodb connected')
})

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port , () => {
    console.log(`app is running on http://localhost:${port}`)
})