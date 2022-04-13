module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Name : {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.INTEGER
      },
      Quantity :{
          type: Sequelize.INTEGER
      } 
    },{
      timestamps: false,
      freezeTableName: true 
    });
  
    return Product;
  };
  