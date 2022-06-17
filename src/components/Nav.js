import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar flex">
      <Link to="/">
        <div className="title">
          <h1>Where's Kirby?</h1>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
