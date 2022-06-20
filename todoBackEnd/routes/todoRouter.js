const router = require("express").Router();
const toDoController = require('../controllers/todoController');

router.get('/todos', toDoController.getToDos);

router.post('/todos', toDoController.postToDo);

router.put('/todo/:id', toDoController.updateToDo);

router.delete('/todo/:id', toDoController.deleteToDo);

module.exports = router;