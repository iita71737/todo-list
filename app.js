const express = require('express')
const port = 3000

const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const app = express()
require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout:'main', extname:'.hbs'}))
app.set('view engine', 'hbs')

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))



app.use(routes)

app.listen(port , () => {
    console.log(`app is running on http://localhost:${port}`)
})
