//載入todo model
const Todo = require('../todo')
//引用mongoose 啟動 mongodb 
const dbStatus = require('../../config/mongoose')

//若成功連線，創建種子資料
dbStatus.once('open', () => {

  for (let i = 0; i < 10; i++) {
    Todo.create({ name: `name-${i + 1}` })
  }
  console.log('done')
})