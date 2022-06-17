import MapPicker from "../components/MapPicker";

const HomeContent = (props) => {
  const { changeMap } = props;
  return (
    <div className="home">
      <MapPicker changeMap={changeMap} />
    </div>
  );
};

export default HomeContent;
