module.exports = function(sequelize, DataTypes) {
  var Profiles = sequelize.define("Profiles", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

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

  return Answers, Profiles, Connections;
};
