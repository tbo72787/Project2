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

  Answers.associate = function(models) {
    Answers.belongsTo(models.Answers, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Answers;
};
