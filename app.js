//載入express套件，並建構應用程式伺服器
const express = require('express')
//  載入express-handlebars
const exphbs = require('express-handlebars')
// 載入method-override
const methodOverride = require('method-override')

//載入路由器
const router = require('./routes')
//引用mongoose 啟動 mongodb
require('./config/mongoose')

const app = express()

//設定port位置，如果在 Heroku 環境則使用 process.env.PORT，否則為本地環境，使用 3000
const port = process.env.PORT || 3000



app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//用 app.use 規定每一筆請求都需要透過 express內建的body-parser 進行前置處理
app.use(express.urlencoded({ extended: true }))
// url裡有?_method時會經由method-override來轉換為相對應的http動詞
app.use(methodOverride('_method'))
// 將 request 導入路由器
app.use(router)


//監聽伺服器
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})