const express = require('express');
const router = express.Router()

const userRouter = require('./user.route');

router.get("/", (req, res) => {
  res.json({
    message: "wellcome to the jungle"
  })
})

router.use("/user", userRouter)

module.exports = router