import { Link } from "react-router-dom";

const Win = (props) => {
  const { time, click, reset } = props;
  return (
    <div className="win-modal flex">
      <h2>Good Job!, you finished in...</h2>
      <div className="time">{time.seconds} seconds</div>
      <form className="flex">
        <input type="text" className="user-name" />
        <div className="win-buttons flex">
          <Link to="/">
            <button onClick={reset} className="cancel">
              Return Home
            </button>
          </Link>
          <button onClick={click} className="submit">
            Add Score
          </button>
        </div>
      </form>
    </div>
  );
};

export default Win;
