//載入 mongoose
const mongoose = require('mongoose')
//載入todo model
const Todo = require('../todo')

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

  for (let i = 0; i < 10; i++) {
    Todo.create({ name: `name-${i + 1}` })
  }
  console.log('done')
})