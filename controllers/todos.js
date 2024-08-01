// Import the model that we exported in the Todo.js model file
import { Todo } from '../models/todo.js'

// This ^^ takes the place of the import we were using previously, so we can delete it!
// import { todos } from '../data/todo-data.js'

// notice the use of async!
async function index(req, res) {
  try {
    // use the model to find all todo docs
    // await is used to stop execution until
    // the operation is complete
    const todos = await Todo.find({})
    res.render('todos/index', {
      todos,
      time: req.time
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function newTodo(req, res) {
  res.render('todos/new')
}

async function create(req, res) {
  try {
    // initializing a new todo as not being done
    req.body.done = false
    // create the new todo
    await Todo.create(req.body)
    // {text: 'some text', done: false}
    // redirect (GET) to /todos
    res.redirect('/todos')
  } catch (error) {
    console.log(error)
    res.redirect('/todos')
  }
}

async function show(req, res) {
  try {
    // find the todo's details
    const todo = await Todo.findById(req.params.todoId)
    // render a view that shows a todo's details
    res.render('todos/show', {
      todo
    })
  } catch (error) {
    console.log(error)
    res.redirect('/todos')
  }
}

async function deleteTodo(req, res) {
  try {
    // find the todo and delete it
    await Todo.findByIdAndDelete(req.params.todoId)
    // redirect to /todos
    res.redirect('/todos')
  } catch (error) {
    console.log(error)
    res.redirect('/todos')
  }
}


export {
  index,
  newTodo as new,
  create,
  show,
  deleteTodo as delete,
}