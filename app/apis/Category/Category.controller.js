
const res = require("express/lib/response");
const { Category } = require("../../models");
const db = require("../../models");
const { serverError, success } = require("../../util/helper");
const Categorys = db.Category;
const sequelize = require('../../models').sequelize;


exports.insert = async (req, res) => {
console.log("error");
  var info = await Category.create({
    Name: req.body.name,
    Active: req.body.active
  }
  )
  return success(res, { message: "Category  Added", response: 200, status: true });

};

exports.update = async (req, res) => {
  console.log("error error");
  var body = {};
  if (req.body.name) {
    body.name = req.body.name
  }
  if (req.body.active) {
    body.active = req.body.active

  }
  var upto = await Category.update(body, {
    where: {
      id: req.body.id
    }
  }
  )
  return success(res, { message: "Category  Updated", response: 200, status: true });

};

exports.delete = async (req, res) => {

  //console.log(req.query.id);
  var dlt = await Category.destroy({
    where: {
      id: req.query.id
    }
  })
  return success(res, { message: "Category  Deleted", response: 200, status: true });

};

exports.CategoryAll = (req, res) => {

  Category.findAll({ raw: true }).then(function (Category) {
    console.log(Category)
    return success(res, { message: "Category List", response: 200, status: true, data: Category });

  }).catch(err => {
    return serverError(res, { message: err.message });
  });
};