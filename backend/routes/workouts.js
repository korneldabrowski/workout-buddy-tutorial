const express = require("express");

const router = express.Router();

// get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the app." });
});

// get a Single workout
router.get("/:id", (req, res) => {
  res.json({ message: "GET Single workout" });
});

// post a new workout
router.post("/", (req, res) => {
  res.json({ message: "POST new workout" });
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout workout" });
});

// Update the workout
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE new workout" });
});

module.exports = router;