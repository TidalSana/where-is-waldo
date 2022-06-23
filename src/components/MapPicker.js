import { Link } from "react-router-dom";
import mapOne from "../images/kirby.png";
import mapTwo from "../images/kirby1.png";
import mapThree from "../images/kirby2.jpg";
import "../styles/MapPicker.css";

const MapPicker = (props) => {
  const { changeMap } = props;
  return (
    <Link to="play">
      <div className="image-maps flex">
        <div className="maps-div" onClick={changeMap}>
          <h3>Grass Map</h3>
          <img className="maps" id="grass" src={mapOne} alt="kirby grass" />
        </div>
        <div className="maps-div" onClick={changeMap}>
          <h3>Fountain Map</h3>

          <img
            className="maps"
            id="fountain"
            src={mapTwo}
            alt="kirby fountain"
          />
        </div>
        <div className="maps-div" onClick={changeMap}>
          <h3>Space Map</h3>

          <img className="maps" id="space" src={mapThree} alt="kirby space" />
        </div>
      </div>
    </Link>
  );
};

export default MapPicker;
