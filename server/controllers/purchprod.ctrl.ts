import { Router } from 'express';
import * as procedures from '../procedures/purchprod.proc';

const router = Router();

router.post('/', (req, res) => { 
    procedures.create(req.body.price, req.body.stripetransactionid)
    .then((success) => {
        console.log('Added new purchase')
        res.send(success);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
})
export default router;