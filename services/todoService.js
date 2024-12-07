const Todo = require('../models/todoModel');
 
class TodoService {
  async getAllTodos() {
    return await Todo.find();
  }

  async createTodo(data) {
    const todo = new Todo(data);
    return await todo.save();
  }

  async updateTodo(id, data) {
    return await Todo.findByIdAndUpdate(id, data, { new: true });
  }
  async patchTodo(id, data) {
    return await Todo.findByIdAndUpdate(id, { $set: data }, { new: true });
  }
  

  async deleteTodo(id) {
    return await Todo.findByIdAndDelete(id);
  }
}

module.exports = new TodoService();
