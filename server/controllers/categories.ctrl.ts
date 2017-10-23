import * as express from 'express';
import * as procedures from '../procedures/categories.proc';

let router = express.Router();

router.route('/') //this is /categories
.get((req, res) => {
    procedures.all()
        .then((categories) => {
            res.send(categories);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
})
//get items from certain category
router.route('/:id') //this is /categories/:id
.get((req, res) => {
    procedures.read(req.params.id)
        .then((category) => {
            res.send(category);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
})

export default router;