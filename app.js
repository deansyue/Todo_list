//載入express套件，並建構應用程式伺服器
const express = require('express')
//載入 mongoose
const mongoose = require('mongoose')

const app = express()

//設定port位置
const port = 3000

//設定連線到mongodb
mongoose.connect('mongodb://localhost/todo_list')

//取得mongodb連線狀態
const dbStatus = mongoose.connection
//若連線異常
dbStatus.on('error', () => {
  console.log('mongodb connect error!')
})
//若成功連線
dbStatus.once('open', () => {
  console.log('mongodb connected!')
})

//設定首頁路由
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//監聽伺服器
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})