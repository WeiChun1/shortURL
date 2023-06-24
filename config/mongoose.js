//設定mongoDB資料庫
const mongoose = require('mongoose')

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//連線mogoose 確定是否連線成功
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db