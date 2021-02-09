var express = require('express')
const router = express.Router();
const launchRouter = require('./launches')

router.use('/.netlify/functions/server/api/launch', launchRouter)

// module.exports = router
module.exports.handler = serverless(router)