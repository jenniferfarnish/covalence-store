import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import stateRouting from './middleware/routing.mw';
import api from './api';

let clientPath = path.join(__dirname, '../client');

let app = express();
app.use(express.static(clientPath));

app.use(bodyParser.json());

app.get('*', stateRouting);

app.listen(3000);