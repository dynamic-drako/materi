const express = require('express');
const cors = require('cors');
const app = express()

const sequelize = require('./config/db');
const User = require('./models/User');
const routes = require('./routes');

const PORT = process.env.PORT || 3000

async function testConnection () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await User.sync({alter: true})
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection()

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
  console.log("server running on port", PORT);
})