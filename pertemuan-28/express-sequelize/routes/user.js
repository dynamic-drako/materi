const express = require('express');
const router = express.Router()

const {getAllUser, getUserByID} = require("../controllers/user")

router.get("/", getAllUser)
router.get("/:id", getUserByID)

module.exports = router