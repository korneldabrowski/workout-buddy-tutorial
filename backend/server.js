require("dotenv").config();
const express = require("express");

// Create express app
const app = express();
const workoutRoutes = require("./routes/workouts");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server is listening on port 3000");
});
