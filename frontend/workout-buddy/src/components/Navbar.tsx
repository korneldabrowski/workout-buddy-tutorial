import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar bg-base-300 px-0 sm:px-20 h-28 ">
      <Link to="/">
        <h1 className="btn btn-ghost btn-outline btn-lg  text-4xl">
          Workout Buddy
        </h1>
      </Link>
    </header>
  );
};

export default Navbar;
