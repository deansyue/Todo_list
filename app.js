//載入express套件，並建構應用程式伺服器
const express = require('express')
const app = express()

//設定port位置
const port = 3000

//設定首頁路由
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//監聽伺服器
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})