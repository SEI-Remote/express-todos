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
      todos
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

export {
  index
}