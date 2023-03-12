const express = require("express");

const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// get all workouts
router.get("/", getAllWorkouts);

// get a Single workout
router.get("/:id", getWorkout);

// post a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// Update the workout
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE new workout" });
});

module.exports = router;
