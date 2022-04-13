'use strict';

let express = require('express');
let router = express.Router();


//const languagesRoutes = require('../apis/languages/languages.routes');
 
const CategoryRoutes = require('../apis/Category/Category.routes')
const ProductRoutes =require('../apis/products/product.routes')


router.use('/Category', CategoryRoutes);
router.use('/product', ProductRoutes);

// router.use('/otp_codes', otp_codesRoutes);
// router.use('/api_list', api_listRoutes);

module.exports = router;