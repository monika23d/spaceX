var express = require( "express" );
// var apiRouter = require('./api');
const apiRouter = "/.netlify/functions/server/api"
const cors = require('cors');
const router = express.Router();

//module.exports = () => {
    const app = express()
    app.use(cors()) // TO remove CORS error while calling directly from UI
    app.use(apiRouter,router)
    //return app
//}

module.exports.handler = serverless(app);


