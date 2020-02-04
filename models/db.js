module.exports = function(sequelize, DataTypes) {
  var Profiles = sequelize.define("Profiles", {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    picture: DataTypes.STRING
  });

  var Answers = sequelize.define("Answers", {
    userId: DataTypes.STRING,
    answerArr: DataTypes.STRING
  });

  var Connections = sequelize.define("Connections", {
    userId: DataTypes.STRING,
    answerArr: DataTypes.STRING
  });

  return Answers, Profiles, Connections;
};
