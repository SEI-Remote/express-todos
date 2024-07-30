import { Router } from 'express'
import { todos } from '../data/todo-data.js'

const router = Router()

// GET localhost:3000/users
router.get('/', function(req, res) {
  res.render('todos/index', {
    todos
  })
})

export { router }
