//引用 Express 與 Express 路由器
const express = require('express')

const router = express.Router()

//載入Todo model
const Todo = require('../../models/todo')

//設定new的路由
router.get('/new', (req, res) => {
  return res.render('new')
})

//設定create功能路由
router.post('/', (req, res) => {
  const name = req.body.name //將從input表單內的key-value值取出
  return Todo.create({ name }) //存入資料庫
    .then(() => res.redirect('/')) //新增完成後導向首頁
    .catch(error => console.log(error))
})

//設定detail路徑路由
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render('detail', { todo }))
    .catch(error => console.log(error))
})

//設定按下Edit後的路由
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render('edit', { todo }))
    .catch(error => console.log(error))
})

//設定使用save傳送出修改表單的路由
router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, isDone } = req.body
  return Todo.findById(id)
    .then((todo) => {
      todo.name = name
      todo.isDone = (isDone === 'on')
      return todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(error => console.log(error))
})

//設定使用delete後的路由
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .then((todo) => todo.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//匯出路由器
module.exports = router