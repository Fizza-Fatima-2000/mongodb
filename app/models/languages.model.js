module.exports = (sequelize, Sequelize) => {
  const Language = sequelize.define("languages", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    }
  },{
    timestamps: false,
    freezeTableName: true,
  });

  return Language;
};
