const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', (req, res) => res.render('home'));

router.get('/todos/all', todoController.getAll);

// router.get('/todos/:id', todoController.getItem);

router.get('/todos/new', (req, res) => res.render('new-todo'));

router.post('/todos/new', todoController.postItem);
//
// router.delete('/todos/delete/:id', todoController.deleteItem);
//
// router.patch('/todos/edit/:id', todoController.updateItem);

module.exports = router;
