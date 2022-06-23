import { Link } from "react-router-dom";
import MapPicker from "../components/MapPicker";

const HomeContent = (props) => {
  const { changeMap } = props;
  return (
    <div className="home flex">
      <MapPicker changeMap={changeMap} />
      <div className="leaderboard-path flex">
        <h2>Check out your score</h2>
        <div className="button-leaderboard">
          <Link to="/leaderboard">
            <button className="view-lb">View Leaderboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
