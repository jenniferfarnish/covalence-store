import * as express from 'express';
import { sendEmail }from '../services/email.svc';

let router = express.Router();

router.post('/', (req, res) => {
    sendEmail('email@email.com', req.body.from, 'You have a new contact form submission', req.body.message)
    .then((response) => {
        res.sendStatus(201);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    })
});

export default router