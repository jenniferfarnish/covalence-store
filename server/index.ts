import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import api from './api';

let clientPath = path.join(__dirname, '../client');

let app = express();
app.use(express.static(clientPath));

app.use(bodyParser.json());

app.listen(3000);