const express = require("express");

// Create express app
const app = express();

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
