const db = require("../../models");
const ROLES = db.ROLES;
const Language = db.languages;
const { badRequest } = require("../../util/helper");

checkDuplicateCodes = (req, res, next) => {
  // Username
  Language.findOne({
    where: {
      code: req.body.code
    }
  }).then(user => {
    if (user) {
      badRequest(res, {message:"Invalid request, Language already exists"})
      return;
    }
    next();
  });
};


checkMissingFields = (req,res,next) => {
    if (!req.body.code) {
      badRequest(res, {message:"Invalid request, Language Code is required"})
      return;
    }

    if (!req.body.name) {
      badRequest(res, {message:"Invalid request, Language Name is required"})
      return;
    }
    next();
};

checkMissingID = (req,res,next) => {
  if (!req.body.id) {
    badRequest(res, {message:"Invalid request, Language ID is required"})
    return;
  }
  next();
};


const validates = {
  checkDuplicateCodes: checkDuplicateCodes,
  checkMissingFields: checkMissingFields,
  checkMissingID: checkMissingID
//checkRolesExisted: checkRolesExisted
};

module.exports = validates;
