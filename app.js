const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout:'main', extname:'.hbs'}))
app.set('view engine', 'hbs')

db.on('error', () => {
    console.log('mongodb error')
})
db.once('open', () => {
    console.log('mongodb connected')
})

app.get('/', (req, res) => {
     res.render('index')
})

app.listen(port , () => {
    console.log(`app is running on http://localhost:${port}`)
})