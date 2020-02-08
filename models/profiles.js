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

<<<<<<< HEAD:models/profiles.js
=======
  Profiles.associate = function(models) {
    Profiles.hasMany(models.Answers, {
      onDelete: "cascade"
    });
  };

>>>>>>> 939a8cab08f8641c00433f295cb7bd64d87e2320:models/db.js
  return Profiles;
};
