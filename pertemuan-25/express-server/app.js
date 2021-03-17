const express = require('express');
const app = express()

const PORT = process.env.PORT || 3000

// Data
let users = [
  {id:1, username:"auzan"},
  {id:2, username:"yoshi"},
  {id:3, username:"faay"},
]

// Middleware
app.use(express.json())

// Routing
app.get("/", (req, res) => {
  res.json({
    message: "wellcome to the jungle"
  })
})

app.get("/", (req, res) => {
  res.json({
    message: "success get users",
    data: users
  })
})

app.get("/:id", (req, res) => {
  const id = req.params.id
  const user = users.find(item => item.id == id)

  res.json({
    message: "success get user",
    data: user
  })
})

app.post("/", (req, res) => {
  const user = req.body
  console.log(user);

  users.push(user)

  res.json({
    message: "success adding new user",
    data: users
  })
})

// Listen
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
})