import * as express from 'express';
import products from './controllers/products.ctrl';
import categories from './controllers/categories.ctrl';

let router = express.Router();

router
.use('/products', products)
.use('/categories', categories)

export default router;