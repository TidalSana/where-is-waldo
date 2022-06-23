import { Link } from "react-router-dom";
import MapPicker from "../components/MapPicker";
import Leaderboard from "./Leaderboard";

const HomeContent = (props) => {
  const { changeMap } = props;
  return (
    <div className="home flex">
      <MapPicker changeMap={changeMap} />
      <div className="leaderboard-path flex">
        <h2>Want to check out your score?</h2>
        <div className="button-leaderboard">
          <Link to="/leaderboard">
            <button className="view">View Leaderboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
