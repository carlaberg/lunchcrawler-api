const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', (req, res) => res.send('Det här är startsidan'));

router.get('/todos/all', todoController.getAll);

// router.get('/todos/:id', todoController.getItem);
//
// router.post('/todos/new', todoController.postItem);
//
// router.delete('/todos/delete/:id', todoController.deleteItem);
//
// router.patch('/todos/edit/:id', todoController.updateItem);


module.exports = router;
