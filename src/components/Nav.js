import { Link } from "react-router-dom";

const Nav = (props) => {
  const { reset } = props;
  return (
    <nav className="nav-bar flex">
      <Link to="/">
        <div onClick={reset} className="title">
          <h1>Where's Kirby?</h1>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
