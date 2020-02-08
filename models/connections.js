module.exports = function(sequelize, DataTypes) {
  var Connections = sequelize.define("Connections", {
    connection: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Connections;
};
