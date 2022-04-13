const res = require("express/lib/response");
const { Product } = require("../../models");
const db = require("../../models");
const { serverError, success } = require("../../util/helper");
const Products = db.Product;
const sequelize = require('../../models').sequelize;

exports.insert = async (req, res) => {

  var insertion = await Product.create({

    Name: req.body.name,
    Price: req.body.price,
    Quantity: req.body.quantity
  }
  )
  return success(res, { message: "Product  Added", response: 200, status: true });

};

exports.update = async (req, res) => {
  var updateBody = {};

  if (req.body.name) {
    updateBody.name = req.body.name;
  }

  if (req.body.price) {
    updateBody.price = req.body.price;
  }
  if (req.body.quantity) {
    updateBody.quantity = req.body.quantity;
  }

  var updating = await Product.update(updateBody, {
    where: {
      id: req.body.id
    }
  }
  )
  return success(res, { message: " Product Updated", response: 200, status: true });

};

exports.delete = async (req, res) => {

  //console.log(req.query.id);
  var dlt = await Product.destroy({
    where: {
      id: req.query.id
    }
  })
  return success(res, { message: "Product  Deleted", response: 200, status: true });

};

exports.ProductAll = (req, res) => {

  Product.findAll({ raw: true }).then(function (product) {
    console.log(product)
    return success(res, { message: "Product List", response: 200, status: true, data: product });

  }).catch(err => {
    return serverError(res, { message: err.message });
  });
};