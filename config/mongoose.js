//載入 mongoose
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/todo_list'

//設定連線到mongodb
// 如果在 Heroku 環境則使用 process.env.MONGODB_URI
// 否則為本地環境，使用 mongodb://localhost/todo-list
mongoose.connect(MONGODB_URI)

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

module.exports = dbStatus