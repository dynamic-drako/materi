const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
  },
  email: DataTypes.STRING,
  bird_date: DataTypes.DATE,
  
  // custom timestamps
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("NOW()")
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("NOW()")
  }
}, {
  underscored: true,
  timestamps: false
})

module.exports = User