const express = require('express');
const mailer = require('./utilities/mailer');
const app = express()

const port = 3000

app.get("/", (req, res) => {
  res.json({
    message: "wellcome to express"
  })
})

app.get("/email", async (req, res) => {
  let info = await mailer("auzanassdq@gmail.com", "belajar kirim email", "selamat email sudah terkirim")
  console.log(info.messageId);

  res.json({
    message: "success send email"
  })
})

app.listen(port, () => {
  console.log("Server running on port", port);
})