const express = require('express');
const router = express.Router()

const { 
  getUser, 
  getUserById, 
  addUser,
  deleteUser,
  updateUser
} = require('../controllers/user.controller');

// Middleware seluruh route user
router.use((req, res, next) => {
  // console.log("Middleware seluruh route user");
  next()
})

const mwById = (req, res, next) => {
  console.log("Middleware khusus /user/:id");
  next()
}

router.get("/", getUser)
router.get("/:id", mwById ,getUserById)
router.post("/", addUser)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)

module.exports = router