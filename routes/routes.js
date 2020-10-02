const express = require('express')
const router = express.Router()
const trendsController = require('../controllers/trends')

router.get("/trends/:mid", trendsController.getData());


module.exports = router