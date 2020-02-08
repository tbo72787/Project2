module.exports = function(sequelize, DataTypes) {
  var Answers = sequelize.define("Answers", {
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
  Answers.associate = function(models) {
    Answers.belongsTo(models.Answers, {
      foreignKey: {
        allowNull: false
      }
    });
  };

>>>>>>> 939a8cab08f8641c00433f295cb7bd64d87e2320
  return Answers;
};
