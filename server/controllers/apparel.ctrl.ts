import * as express from 'express';
import * as procedures from '../procedures/apparel.proc';

let router = express.Router();

router.route('/') // this is /apparel
.get((req, res) => {
    procedures.read(req.params.id)
        .then((apparel) => {
            console.log('Here are all apparel items')
            res.send(apparel);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
})

export default router;