module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Name: {
        type: Sequelize.STRING
      },
      Active: {
        type: Sequelize.BOOLEAN
      }
    },{
      timestamps: false,
      freezeTableName: true,
    });
  
    return Category;
  };
  