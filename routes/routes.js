const express = require('express');
const router = express.Router();
const lunchController = require('../controllers/lunchController');

router.get('/', (req, res) => {
    res.status(200).send('Hello Lunch');
});
router.get('/lunches', lunchController.getAll);
router.get('/fetch-lunches', lunchController.crawl);

module.exports = router;
