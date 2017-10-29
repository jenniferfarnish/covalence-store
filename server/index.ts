import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import stateRouting from './middleware/routing.mw';
import api from './api';

//const prerender = require('prerender-node');

let clientPath = path.join(__dirname, '../client');

let app = express(); 

app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:1337/').set('prerenderToken', 'YOUR_TOKEN'));

app.use(express.static(clientPath));

app.use(bodyParser.json());

app.use('/api', api);

app.get('*', stateRouting);

app.listen(process.env.PORT || 3000);

// prerender.set('prerenderToken', 'YOUR_TOKEN');
// prerender.set('prerenderServiceUrl', 'http://localhost:1337/');



