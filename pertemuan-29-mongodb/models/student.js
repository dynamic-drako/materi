const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  score: Number,
  nomerAbsen: Number,
});

const Student = mongoose.model("murid", StudentSchema);
module.exports = Student;
