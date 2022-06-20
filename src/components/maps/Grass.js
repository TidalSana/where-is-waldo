const Grass = (props) => {
  const { image, click, style, toggle, selection } = props;
  const kirbys = {
    first: "Star Rod Kirby",
    second: "Painter Kirby",
    third: "Sleep Kirby",
  };
  return (
    <div className="map-div flex">
      <img
        onClick={click}
        className="grass-img"
        src={image}
        alt="grassyfield with kirbys"
      />
      {toggle ? (
        <div className="selector" style={style}>
          <div
            onClick={selection}
            data-value={kirbys.first}
            className="selector-options first-character"
          >
            {kirbys.first}
          </div>
          <div
            onClick={selection}
            data-value={kirbys.second}
            className="selector-options second-character"
          >
            {kirbys.second}
          </div>
          <div
            onClick={selection}
            data-value={kirbys.third}
            className="selector-options third-character"
          >
            {kirbys.third}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Grass;
