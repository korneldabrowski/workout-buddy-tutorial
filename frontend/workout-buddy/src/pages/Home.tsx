import { useState, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

interface Workout {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
}

const Home = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/workouts");
      const data = await res.json();

      if (res.ok) {
        setWorkouts(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row">
      <div className=" my-4 grid sm:grid-cols-3 gap-x-10  ">
        {workouts.length >= 1 &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <div className="ml-auto">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
