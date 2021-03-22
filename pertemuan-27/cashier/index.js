const express = require("express");
const connection = require("./config/db");

const userRouter = require("./router/user");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Tes Koneksi ke database
connection.connect((err) => {
  if (err) {
    console.log(err.sqlMessage);
  } else {
    console.log("berhasil konek database");
  }
});

app.get("/", (req, res) => {
  console.log("home sudah jalan");
  res.json("hello world");
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("tes jalan 123");
});
