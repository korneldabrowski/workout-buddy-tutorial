import React from "react";

interface Workout {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
}

const WorkoutDetails = (props: { workout: Workout }) => {
  const { title, reps, load, createdAt } = props.workout;

  return (
    <div className="card w-96 bg-primary shadow-xl">
      <div className="card-body text-lg text-primary-content">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p>
          <strong>Reps: </strong>
          {reps}
        </p>
        {load > 0 && (
          <p>
            <strong>Load(kg): </strong>
            {load}
          </p>
        )}
        <p className=" font-light">{createdAt}</p>
      </div>
    </div>
  );
};

export default WorkoutDetails;
