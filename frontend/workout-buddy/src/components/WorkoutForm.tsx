import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState(0);
  const [load, setLoad] = useState(0);

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, reps, load }),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" rounded-xl border-2 glass border-neutral my-6 p-6 shadow-sm">
      <h3 className="text-4xl my-2 text-center  text-primary font-bold">
        Add a new workout
      </h3>
      <form onSubmit={formSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="label">
            <span className="label-text">Reps</span>
          </label>
          <input
            type="number"
            placeholder="Reps"
            className="input input-bordered"
            value={reps}
            onChange={(e) => setReps(parseInt(e.target.value))}
          />

          <label className="label">
            <span className="label-text">Load</span>
          </label>
          <input
            type="number"
            placeholder="Load"
            className="input input-bordered"
            value={load}
            onChange={(e) => setLoad(parseInt(e.target.value))}
          />

          <button className="btn btn-primary mt-6">Add Workout</button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutForm;
