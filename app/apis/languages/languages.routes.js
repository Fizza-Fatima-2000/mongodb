const validate = require("./languages.validate");
const controller = require("./languages.controller");

let express = require('express');
let router = express.Router();



router.delete('/des' , controller.delete);
router.get('/All', controller.getAll);
router.patch('/update' , controller.update);
router.post('/Insert', [
  validate.checkMissingFields,
  validate.checkDuplicateCodes
],controller.insert);



module.exports = router;
