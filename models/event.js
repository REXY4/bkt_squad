'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Event.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    date: DataTypes.DATE,
    deskripsi1: DataTypes.TEXT,
    deskripsi2: DataTypes.TEXT,
    deskripsi3: DataTypes.TEXT,
    alamat: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};