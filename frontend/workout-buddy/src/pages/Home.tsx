import { useState, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

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
    <div>
      <div className="mt-4">
        {workouts.length >= 1 &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
