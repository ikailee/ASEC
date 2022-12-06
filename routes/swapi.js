const express = require('express');
const swapiController = require('../controllers/swapiController');
const router = express.Router();

router.get('/', swapiController.get);
router.get('/page/:id', swapiController.getByPageId);
router.get('/search', swapiController.getByName);
router.get('/name/:name/page/:page', swapiController.getByNamePage)

module.exports = router;