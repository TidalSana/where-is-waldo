import Stopwatch from "./Stopwatch";
import "../styles/Character.css";

const Characters = (props) => {
  const { kirby, time, game } = props;

  return (
    <div className="characters flex">
      <div className="stopwatch-container">
        <Stopwatch time={time} game={game} />
      </div>
      <div className="image-container flex">
        <div className="images">
          <img
            className="ability-img first"
            id={kirby.kirbyOne}
            src={kirby.abilityOne}
            alt=""
          />
        </div>
        <div className="images">
          <img
            className="ability-img second"
            id={kirby.kirbyTwo}
            src={kirby.abilityTwo}
            alt=""
          />
        </div>
        <div className="images">
          <img
            className="ability-img third"
            id={kirby.kirbyThree}
            src={kirby.abilityThree}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Characters;
