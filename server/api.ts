import * as express from 'express';
import products from './controllers/products.ctrl';

let router = express.Router();

router
.use('/products', products)

export default router;