import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className=" text-6xl">Workout Buddy</h1>

      <BrowserRouter>
        <div className="pages"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
