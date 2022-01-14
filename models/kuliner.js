'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kuliner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Kuliner.hasMany(models.gambarKuliner,{
        as: "images",
        foreignKey: {
          name: "kulinerId",
        },
      });
    }
  };
  Kuliner.init({
    title: DataTypes.STRING,
    image : DataTypes.STRING,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    deskripsi1: DataTypes.TEXT,
    deskripsi2: DataTypes.TEXT,
    deskripsi3: DataTypes.TEXT,
    alamat: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Kuliner',
  });
  return Kuliner;
};