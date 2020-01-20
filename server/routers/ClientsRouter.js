const express = require('express')
const postsController = require('../controllers/Clients')
const router = express.Router()

router.get('/clients', postsController.getAllClients)

module.exports = router;