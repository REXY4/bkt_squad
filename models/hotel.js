'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hotel.hasMany(models.gambarHotel,{
        as: "images",
        foreignKey: {
          name: "hotelId",
        },
      });
    }
  };
  Hotel.init({
    title: DataTypes.STRING,
    start_time: DataTypes.TIME,
    image : DataTypes.STRING,
    end_time: DataTypes.TIME,
    bintang : DataTypes.INTEGER,
    deskripsi1: DataTypes.TEXT,
    deskripsi2: DataTypes.TEXT,
    deskripsi3: DataTypes.TEXT,
    alamat: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};