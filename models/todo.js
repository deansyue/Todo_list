//載入mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//new為連構子函式，建構一個新的Schema
const todoSchema = new Schema({
  name: {
    type: String, //資料型別為字串
    required: true, //為必輸入欄位
  }
})

module.exports = mongoose.model('Todo', todoSchema)