const Space = (props) => {
  const { image } = props;
  return (
    <div className="map-div flex">
      <img className="space-img" src={image} alt="space with kirbys" />
    </div>
  );
};

export default Space;
