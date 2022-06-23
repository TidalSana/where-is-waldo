import { useEffect } from "react";

const Map = (props) => {
  const { image, click, style, toggle, selection, kirby } = props;
  return (
    <div className="map-div flex">
      <img
        onClick={click}
        className="play-map-img"
        src={image}
        alt="area with kirbys"
      />
      {toggle ? (
        <div className="selector" style={style}>
          <div
            onClick={selection}
            data-value={kirby.kirbyOne}
            className="selector-options first-character"
          >
            {kirby.kirbyOne}
          </div>
          <div
            onClick={selection}
            data-value={kirby.kirbyTwo}
            className="selector-options second-character"
          >
            {kirby.kirbyTwo}
          </div>
          <div
            onClick={selection}
            data-value={kirby.kirbyThree}
            className="selector-options third-character"
          >
            {kirby.kirbyThree}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Map;
