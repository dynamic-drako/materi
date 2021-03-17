let users = require('../models/user');

module.exports = {
  getUser: (req, res) => {
    res.json({
      message: "success get users",
      data: users
    })
  },

  getUserById:  (req, res) => {
    const id = req.params.id
    const user = users.find(item => item.id == id)
  
    res.json({
      message: "success get user",
      data: user
    })
  },

  addUser: (req, res) => {
    const user = req.body
    console.log(user);
  
    users.push(user)
  
    res.json({
      message: "success adding new user",
      data: users
    })
  },

  deleteUser: (req, res) => {
    const id = req.params.id
    users = users.filter(item => item.id != id)

    res.json({
      message: "success delete data",
    })
  },

  updateUser: (req, res) => {
    const id = req.params.id
    const index = users.findIndex(item => item.id == id)

    users[index] = req.body

    res.json({
      message: "success update data user",
      data: users[index]
    })
  },
}