const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Buat koneksi untuk MySql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "school",
});

// Tes koneksi
connection.connect((err) => {
  if (err) {
    console.log(err.sqlMessage);
  } else {
    console.log("berhasil konek database");
  }
});

// queries to database
// queries untuk ambil semua data student dari table student
const queryStudent = `
  select
  student.id,
  student.name,
  student.email,
  student.birth_date,
  student.class_id
  from student join class
  on student.class_id = class.id
`;

app.get("/", (req, res) => {
  res.json("hello world");
});

app.get("/student", (req, res) => {
  // mengeksekusi queries
  connection.query(queryStudent, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

app.get("/student/:id", (req, res) => {
  connection.query(
    `${queryStudent} where student.id = ${req.params.id}`,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    }
  );
});

app.get("/class", (req, res) => {
  connection.query("select * from class", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

app.listen(PORT, () => {
  console.log("tes jalan");
});
