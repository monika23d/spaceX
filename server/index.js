const express = require( "express" );
const bodyParser = require('body-parser')
// const apiRouter = require('./api');
// const cors = require('cors');
const serverless = require('serverless-http');
const path = require('path');
const app = express()
const router = express.Router();

// module.exports = () => {
    // const app = express()
    // // app.use(cors()) // TO remove CORS error while calling directly from UI
    // router.get('/another', (req, res) => res.json({ wel:'welcome' }));
    // app.use(bodyParser.json())
    // app.use(express.static(path.join(__dirname, '../index.html')))
    // app.get('/',function(req,res,next){
    //     res.render('index',{title:'Express'})
    // })
    // // app.use('/api',apiRouter)
    // app.use('/.netlify/functions/server', router)
    // const router = express.Router();
    router.get('/', (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Hello from Express.js!</h1>');
      res.end();
    });
    router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
    router.post('/', (req, res) => res.json({ postBody: req.body }));
    
    app.use(bodyParser.json());
    app.use('/.netlify/functions/server', router);  // path must route to lambda
    app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../dist')));
    
    
// }
module.exports = app
module.exports.handler = serverless(app);


