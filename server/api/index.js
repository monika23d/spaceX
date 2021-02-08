var express = require('express')
const router = express.Router();
const launchRouter = require('./launches')

router.use('/launch', launchRouter)

module.exports = router