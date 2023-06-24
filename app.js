//引用模塊
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const bodyParser = require('body-parser')
const app = express()
//mogoose連線
require('./config/mongoose')
//handlebars設定主頁面
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//靜態資料引入
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})