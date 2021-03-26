const express = require("express");
const cors = require("cors");
const app = express();

// MONGODB_LIVE=mongodb+srv://draco:draco@school.l4h2l.mongodb.net/School?retryWrites=true&w=majority
// PORT=9999

// port
const { PORT, dbConfigMongo } = require("./config");
const localPort = PORT || 3000;
console.log("ini port", localPort);

// controller
const studentRouter = require("./routes/StudentController");
// console.log(studentRouter);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("halo");
});

// route
app.use(studentRouter);

if (dbConfigMongo) {
  app.listen(PORT, () => {
    console.log("server running on port", PORT);
    console.log("konek mongo");
  });
} else {
  console.log("belum konek db mongo");
}
