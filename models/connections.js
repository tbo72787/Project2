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

  Connections.associate = function(models) {
    Connections.belongsTo(models.Profiles, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Connections;
};
