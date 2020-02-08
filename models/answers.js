module.exports = function(sequelize, DataTypes) {
  var Answers = sequelize.define("Answers", {
    answerArr: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Answers;
};
