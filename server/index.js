var express = require( "express" );
var apiRouter = require('./api');
const cors = require('cors');

module.exports = () => {
    const app = express()
    app.use(cors()) // TO remove CORS error while calling directly from UI
    app.use('/api',apiRouter)
    return app
}


