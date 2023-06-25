const express = require('express')
const router = express.Router()
const shortURL = require('../../models/shortURL')
const shortenURL_func = require('../../utils/shortenURL')


router.post('/', (req, res) => {
  const shortenURL = shortenURL_func(5)
  const originURL = req.body.url
  //看輸入不是網址時，回首頁
  if (!originURL) return res.redirect("/")
  
  shortURL.findOne({ originURL })
    //看data是否已經存在，如果在直接使用，沒有的話新增到資料庫
        .then(data => data ? data : shortURL.create({ shortenURL, originURL }))
    .then(data =>
      //進入到show頁面把做出的短網址秀出來
      res.render('show', { origin: req.headers.origin, shortenURL: data.shortenURL})
    )
    .catch(error => console.log(error))
})

router.get('/:shortenURL', (req, res) => {
  const { shortenURL } = req.params

  //從資料庫找尋相對應的短網址，如果有就連線到原始網址，否則跳出錯誤頁面
  shortURL.findOne({ shortenURL })
    .then(data => {
      if (!data) {
        res.render('error')
      }else{
        res.redirect(data.originURL)
      }
    })
    .catch(error => console.log(error))
})


module.exports = router

