const db = require("../../models");
const ROLES = db.ROLES;
const Product = db.Product;
const { badRequest } = require("../../util/helper");

checkDuplicateItems = (req, res, next) => {
  // Username
  Product.findOne({
    where: {
      Name : req.body.name
    }
  }).then(product => {
    if (product) {
      badRequest(res, {message:"Invalid request, Product already exists"})
      return;
    }
    next();
  });
};
 
checkUpdateBody= (req , res ,next)=>{
  var abc=Object.keys(req.body).length;
  if (req.body.id) {

      if (abc<=1) {
      badRequest(res, {message:"Invalid request, no body avable to update"})
          
      }
}
  if(!req.body.id){
    badRequest(res, {message:"Invalid request, Product id is missing "})
  
}
next();

}

checkMissingFields = (req,res,next) => {
    if (!req.body.name) {
      badRequest(res, {message:"Invalid request, Product name is required"})
      return;
    }

    if (!req.body.price) {
      badRequest(res, {message:"Invalid request, Product price is required"})
      return;
    }
    if(!req.body.quantity){
      badRequest(res ,{ message:"Invalid request , Product Quantity is requires " })
      return;
    }
    next();
};



checkMissingID = (req,res,next) => {
  if (!req.query.id) {
    badRequest(res, {message:"Invalid request, Product ID is required"})
    return;
  }
  next();
};


const validates = {
  checkDuplicateItems : checkDuplicateItems ,
  checkMissingFields: checkMissingFields,
  checkMissingID: checkMissingID,
  checkUpdateBody :checkUpdateBody

//checkRolesExisted: checkRolesExisted
};

module.exports = validates;
