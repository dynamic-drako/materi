const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
  },
  email: DataTypes.STRING,
  bird_date: DataTypes.DATE
}, {
  underscored: true,
  timestamps: true
})

module.exports = User