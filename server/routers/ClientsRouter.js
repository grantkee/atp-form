const express = require('express');
const clientsController = require('../controllers/clientsController');
const router = express.Router();

router.get('/', clientsController.getAllClients)
router.get('/:id', clientsController.getClientById)

module.exports = router;