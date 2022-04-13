const db = require("../../models");
const ROLES = db.ROLES;
const Category = db.Category;
const { badRequest } = require("../../util/helper");

checkDuplicateCategoryId = (req, res, next) => {
  // Username
  Category.findOne({
    where: {
      id: req.body.id
    }
  }).then(category=> {
    if (category) {
      badRequest(res, {message:"Invalid request, Category already exists"})
      return;
    }
    next();
  });
};


checkMissingFields =(req ,res ,next) =>{
  if (!req.body.name){
    badRequest(res ,{message: "Invalid request , Category Name is required"})
    return;
  }
  if(!req.body.active){
    badRequest(res ,{ message :"Invalid request , Category is active or not"})
    return;
  }
  next();

};
checkUpdateCategoryItems =(req ,res ,next)=>{
  var xyz =Object.keys(req.body).length;
  if (req.body.id) {

      if (abc<=1) {
      badRequest(res, {message:"Invalid request, no body available to update"})
          
      }
}
  if(!req.body.id){
    badRequest(res, {message:"Invalid request, Category id is missing "})
  
}
next();


}

checkMissingID = (req,res,next) => {
  if (!req.body.id) {
    badRequest(res, {message:"Invalid request, Category ID is required"})
    return;
  }
  next();
};


const validates = {
  checkDuplicateCategoryId: checkDuplicateCategoryId,
  checkMissingFields: checkMissingFields,
  checkMissingID: checkMissingID,
  checkUpdateCategoryItems:checkUpdateCategoryItems
//checkRolesExisted: checkRolesExisted
};

module.exports = validates;
