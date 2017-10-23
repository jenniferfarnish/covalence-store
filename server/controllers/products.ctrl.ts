import * as express from 'express';
import * as procedures from '../procedures/products.proc';

let router = express.Router();

router.route('/') // this is /products
    .get((req, res) => {
        procedures.all()
            .then((products) => {
                res.send(products);
            }).catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });
    })
//get individual product
    router.route('/:id') //this is /products/:id
    .get((req, res) => {
        procedures.read(req.params.id)
            .then((product) => {
                res.send(product);
            }).catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });
    })

    export default router;