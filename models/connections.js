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

<<<<<<< HEAD
=======
  Connections.associate = function(models) {
    Connections.belongsTo(models.Profiles, {
      foreignKey: {
        allowNull: false
      }
    });
  };

>>>>>>> 939a8cab08f8641c00433f295cb7bd64d87e2320
  return Connections;
};
