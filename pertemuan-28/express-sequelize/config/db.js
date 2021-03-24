const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  database: "my_app",
  username: "root",
  password: "root",
  host: "localhost",
  dialect: "mysql"
})

module.exports = sequelize