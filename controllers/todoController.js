const todoService = require('../services/todoService');
const todoView = require('../views/todoView');

class TodoController {
  async getAllTodos(req, res) {
    try {
      const todos = await todoService.getAllTodos();
      res.status(200).json(todoView.formatTodos(todos));
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createTodo(req, res) {
    try {
      const todo = await todoService.createTodo(req.body);
      res.status(201).json(todoView.formatTodo(todo));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateTodo(req, res) {
    try {
      const todo = await todoService.updateTodo(req.params.id, req.body);
      if (!todo) return res.status(404).json({ message: "Todo not found" });
      res.status(200).json(todoView.formatTodo(todo));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async patchTodo(req, res) {
    try {
      // Use `findByIdAndUpdate` with `{ new: true }` to return the updated document
      const todo = await todoService.patchTodo(req.params.id, req.body);
      if (!todo) return res.status(404).json({ message: "Todo not found" });
      res.status(200).json(todoView.formatTodo(todo));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  

  async deleteTodo(req, res) {
    try {
      const todo = await todoService.deleteTodo(req.params.id);
      if (!todo) return res.status(404).json({ message: "Todo not found" });
      res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new TodoController();
