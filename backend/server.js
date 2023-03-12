require("dotenv").config();
const express = require("express");

// Create express app
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app." });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server is listening on port 3000");
});
