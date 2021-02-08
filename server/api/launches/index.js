var express = require('express')
const router = express.Router();
const launchService = require('../../service/launch.service')

router.get('/',(req, res) => {
    launchService.getLaunch().then((resp) => {
        res.send(resp)
    })
})

module.exports = router