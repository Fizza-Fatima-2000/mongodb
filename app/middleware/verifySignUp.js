const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!"
      });
      return;
    }
    next();
    // Email
    // User.findOne({
    //   where: {
    //     email: req.body.email
    //   }
    // }).then(user => {
    //   if (user) {
    //     res.status(400).send({
    //       message: "Failed! Email is already in use!"
    //     });
    //     return;
    //   }

      
    // });
  });
};


checkMissingFields = (req,res,next) => {
    if (!req.body.email) {
      res.status(400).send({
        message: "Email is missing in submission"
      });
      return;
    }

    if (!req.body.password) {
      res.status(400).send({
        message: "Password is missing in submission"
      });
      return;
    }

    if (!req.body.first_name) {
      res.status(400).send({
        message: "First Name is missing in submission"
      });
      return;
    }

    if (!req.body.last_name) {
      res.status(400).send({
        message: "Last Name is missing in submission"
      });
      return;
    }
    next();
};


checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkMissingFields: checkMissingFields
//  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
