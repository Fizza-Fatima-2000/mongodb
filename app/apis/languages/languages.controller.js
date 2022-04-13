
const res = require("express/lib/response");
const { languages } = require("../../models");
const db = require("../../models");
const { serverError, success } = require("../../util/helper");
const Language = db.languages;
const sequelize = require('../../models').sequelize;

exports.insert = async (req, res) => {

  var result = await Language.create({
    code: req.body.code,
    name: req.body.name,
  }
  )
  return success(res, { message: "Language added", response: 200, status: true });

};

exports.update = async(req ,res)=>{
  var up = await languages.update({
    "name" : req.body.name } ,{
where :{
    
       "id" : req.body.id}
  },
  {
    
   } )
  return success(res, { message: "Language updated", response: 200, status: true });

}




exports.delete = async (req, res) => {
  var des = await Language.destroy( {
    where: {
      "id": 2
    }
  })
  return success(res, { message: "Language added", response: 200, status: true });

}





exports.getAll = (req, res) => {
  // chain all your queries here. make sure you return them.
  Language.findAll({ raw: true }).then(function (languages) {
    console.log(languages)
    return success(res, { message: "Languages List", response: 200, status: true, data: languages });

    // res.status(200).send({ message: "Languages List", response: 200, status: true , data: languages });
  }).catch(err => {
    return serverError(res, { message: err.message });
  });
};