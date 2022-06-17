const Fountain = (props) => {
  const { image } = props;
  return (
    <div className="map-div flex">
      <img className="fountain-img" src={image} alt="fountain with kirbys" />
    </div>
  );
};

export default Fountain;
