import { useEffect, useState } from "react";

const Stopwatch = (props) => {
  const { time, game } = props;

  const [timer, setTime] = useState(0);
  const [timerOn, setTimer] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        // every 10 milliseconds increase by 10
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      // stops timer
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  useEffect(() => {
    // if game is not over
    if (!game) setTimer(true);

    // if game is over
    if (game) {
      setTimer(false);
      let seconds = ("0" + Math.floor((timer / 1000) % 60)).slice(-2);
      let ms = ("0" + ((timer / 10) % 100)).slice(-2);
      return time({
        seconds: `${seconds}.${ms}`,
      });
    }
  }, [game, time, timer]);
  return (
    <div className="stopwatch">
      <div className="stopwatch-inner" style={{ fontSize: "100px" }}>
        <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
        <span>.</span>
        <span>{("0" + ((timer / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
};

export default Stopwatch;
