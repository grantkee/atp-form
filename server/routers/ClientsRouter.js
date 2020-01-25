const express = require('express');
const clientsController = require('../controllers/clientsController');
const router = express.Router();

router.get('/clients', clientsController.getAllClients)
router.get('/clients/:id', clientsController.getClientById)

module.exports = router;