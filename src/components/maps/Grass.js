const Grass = (props) => {
  const { image, click } = props;
  return (
    <div className="map-div flex">
      <img
        onClick={click}
        className="grass-img"
        src={image}
        alt="grassyfield with kirbys"
        useMap="#grassmap"
      />
      <map name="grassmap">
        <area shape="square" coords="29, 59, 34, 63" alt="Star Rod" />
      </map>
    </div>
  );
};

export default Grass;
