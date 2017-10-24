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

<<<<<<< HEAD
app.listen(3000, function () {
    console.log('Listening on port 3000');
  })
=======
app.listen(process.env.PORT || 3000);
>>>>>>> eec1245690b5bcb737ea6929fd831fe8c9146907
