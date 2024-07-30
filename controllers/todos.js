import { todos } from '../data/todo-data.js'

function index(req, res) {
  res.render('todos/index', {
    todos
  })
}

export {
  index
}