const validate = require("./Category.validate");
const controller = require("./Category.controller");

let express = require('express');
let router = express.Router();



router.delete('/dlt' ,[validate.checkMissingID], controller.delete);
router.get('/get', controller.CategoryAll);
router.patch('/upto' ,[validate.checkUpdateCategoryItems],  controller.update);
router.post('/Insert',[validate.checkMissingFields ,validate.checkDuplicateCategoryId],controller.insert);



module.exports = router;
