module.exports = function(sequelize, DataTypes) {
  var Connections = sequelize.define("Connections", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answerArr: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Connections;
};
