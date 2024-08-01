import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'
const router = Router()

// GET localhost:3000/todos
router.get('/', todosCtrl.index)
// GET localhost:3000/todos/new
router.get('/new', todosCtrl.new)
// GET localhost:3000/todos/:todoId
router.get('/:todoId', todosCtrl.show)
// GET localhost:3000/todos/:todoId/edit
router.get('/:todoId/edit', todosCtrl.edit)
// POST localhost:3000/todos
router.post('/', todosCtrl.create)
// DELETE localhost:3000/todos/:todoId
router.delete('/:todoId', todosCtrl.delete)
export { router }
