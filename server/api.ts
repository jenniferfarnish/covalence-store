import * as express from 'express';
import products from './controllers/products.ctrl';
import categories from './controllers/categories.ctrl';
import misc from './controllers/misc.ctrl';
import apparel from './controllers/apparel.ctrl';
import purchases from './controllers/purchases.ctrl';
import purchprod from './controllers/purchprod.ctrl';
import contactus from './controllers/contactus.ctrl';

let router = express.Router();

router
.use('/products', products)
.use('/categories', categories)
.use('/misc', misc)
.use('/apparel', apparel)
.use('/purchases', purchases)
.use('/purchprod', purchprod)
.use('/contactus', contactus)

export default router;