class TodoView {
    formatTodos(todos) {
      return todos.map(todo => ({
        id: todo._id,
        title: todo.title,
        completed: todo.completed,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
      }));
    }
  
    formatTodo(todo) {
      return {
        id: todo._id,
        title: todo.title,
        completed: todo.completed,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
      };
    }
  }
  
  module.exports = new TodoView();
  