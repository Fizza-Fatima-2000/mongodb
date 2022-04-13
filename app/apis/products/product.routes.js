const validate = require("./product.validate");
const controller = require("./product.controller");

let express = require('express');
let router = express.Router();



router.delete('/dl',[validate.checkMissingID] , controller.delete);
router.get('/go', controller.ProductAll);
router.patch('/update' ,[validate.checkUpdateBody] , controller.update);
router.post('/Insert' ,[validate.checkMissingFields, validate.checkDuplicateItems ],controller.insert);
 


module.exports = router;
