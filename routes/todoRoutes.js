const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
console.log(__dirname);

router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.patch('/:id', todoController.patchTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
