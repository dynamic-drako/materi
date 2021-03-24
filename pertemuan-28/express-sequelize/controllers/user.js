const User = require('../models/User');

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.findAll()

    res.json({
      message: "success get all data",
      data: users
    })
  },

  getUserByID: async (req, res) => {
    const user = await User.findOne({ 
      where: { id : req.params.id}
    })

    res.json({
      message: "success get user",
      data: user
    })
  }
}