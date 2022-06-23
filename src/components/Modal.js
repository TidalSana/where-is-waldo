import { useNavigate } from "react-router-dom";

const Win = (props) => {
  const navigate = useNavigate();
  const { time, click, reset } = props;
  return (
    <div className="win-modal flex">
      <h2>Good Job!, you finished in...</h2>
      <div className="time">{time.seconds} seconds</div>
      <form className="flex">
        <input type="text" className="user-name" />
        <div className="win-buttons flex">
          <button
            onClick={() => {
              reset();
              navigate("/");
            }}
            className="cancel"
          >
            Return Home
          </button>
          <button
            onClick={(e) => {
              click(e);
              navigate("/leaderboard");
            }}
            className="submit"
          >
            Add Score
          </button>
        </div>
      </form>
    </div>
  );
};

export default Win;
