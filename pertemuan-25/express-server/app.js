const express = require('express');
const app = express()

const PORT = process.env.PORT || 3000

const users = [
  {id:1, username:"auzan"},
  {id:2, username:"yoshi"},
  {id:3, username:"faay"},
]

app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "wellcome to the jungle"
  })
})

app.get("/user", (req, res) => {
  res.json({
    message: "success get users",
    data: users
  })
})

app.get("/user/:id", (req, res) => {
  const id = req.params.id
  console.log(id);

  const user = users.find(item => item.id == id)
  console.log(user);

  res.json({
    message: "success get user",
    data: user
  })
})

app.post("/user", (req, res) => {
  const user = req.body
  console.log(user);

  users.push(user)

  res.json({
    message: "success adding new user",
    data: users
  })
})

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
})
