//引用 Express 與 Express 路由器
const express = require('express')

const router = express.Router()

//載入Todo model
const Todo = require('../../models/todo')

//設定首頁路由
router.get('/', (req, res) => {
  Todo.find() //取出todo model的所有資料
    .lean() //把Mongoose 的 Model物件轉換成乾淨的javaScript資料陣列
    .sort({ _id: 'asc' }) //將資料依id排序
    .then(todos => res.render('index', { todos })) //將資料傳給index樣本
    .catch(error => console.error(error)) //錯誤處理

})

//匯出路由模組
module.exports = router