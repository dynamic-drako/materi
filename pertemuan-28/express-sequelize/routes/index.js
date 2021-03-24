const express = require('express');
const router = express.Router()

const userRouter = require("./user")

// Routes
router.get("/", (req, res) => {
  res.json({
    message: "wellcome to my app"
  })
})

router.use("/users", userRouter)

module.exports = router