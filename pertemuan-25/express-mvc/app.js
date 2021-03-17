const express = require('express');

const routes = require('./routes');
const app = express()

const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use((req, res, next) => {
  // console.log("Middleware seluruh request");
  next()
})

// routes
app.use(routes)

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
})