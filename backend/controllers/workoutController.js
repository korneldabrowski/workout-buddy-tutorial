const Workout = require("../models/workoutModel");

// get all workouts

// get a Single workout

// create a new workout

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout

// update a workout

module.exports = {
  //   getAllWorkouts,
  //   getWorkout,
  createWorkout,
  //   deleteWorkout,
  //   updateWorkout,
};
