const express = require("express");
const router = express.Router();

// import dari controller
const { getAllUser } = require("./controller");

// pembuatan router sesuai controller
router.get("/", getAllUser);

module.exports = router;
