import { useState, useEffect } from "react";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

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
      <div>
        xd
        {workouts &&
          workouts.map((workout) => (
            <div key={workout._id}>
              <h3>{workout.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
