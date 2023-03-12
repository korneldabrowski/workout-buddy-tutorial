const express = require("express");
const Workout = require("../models/workoutModel");

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
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(201).json({ workout });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
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
