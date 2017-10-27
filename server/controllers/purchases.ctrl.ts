import { Router } from 'express';
import * as stripeSvc from '../services/stripe.svc';

const router = Router();

router.post('/', (req, res) => { // /purchases
    let amount = Number(req.body.amount);
    stripeSvc.charge(req.body.token, amount)
    .then((success) => {
        res.sendStatus(204);
    }).catch((err: any) => { 
        res.status(400).send(err.message); 
    });
});
export default router;