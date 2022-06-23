import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import {
  faDroplet,
  faLeaf,
  faShuttleSpace,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import db from "../firebase/config";
import mapOne from "../images/kirby.png";
import mapTwo from "../images/kirby1.png";
import mapThree from "../images/kirby2.jpg";
import "../styles/Leaderboard.css";

const Leaderboard = () => {
  const [populate, setPopulate] = useState(false);
  const [scores, setScore] = useState([]);
  const populateBoard = async (e) => {
    const { id } = e.currentTarget;
    const leadRef = collection(db, "leaderboard");
    const q = query(leadRef, orderBy("seconds", "desc"), limit(51));
    const mapRef = await getDocs(q);
    const points = [];
    mapRef.forEach((doc) => {
      if (doc.data().level === id) {
        points.unshift(doc.data());
      }
    });
    setScore([...points]);
    setPopulate(true);
  };
  return (
    <div className="leaderboards">
      <h2>Leaderboards - Top 50</h2>
      <div className="image-maps-leaderboard flex">
        <div onClick={populateBoard} id="grass" className="maps-div-lb">
          <img className="maps-lb" src={mapOne} alt="kirby grass" />
          <h3>
            Grass Map - <FontAwesomeIcon icon={faLeaf} />
          </h3>
        </div>
        <div onClick={populateBoard} className="maps-div-lb" id="fountain">
          <img className="maps-lb" src={mapTwo} alt="kirby fountain" />
          <h3>
            Fountain Map - <FontAwesomeIcon icon={faDroplet} />
          </h3>
        </div>
        <div onClick={populateBoard} className="maps-div-lb" id="space">
          <img className="maps-lb" src={mapThree} alt="kirby space" />
          <h3>
            Space Map - <FontAwesomeIcon icon={faShuttleSpace} />
          </h3>
        </div>
      </div>
      {populate ? (
        <table className="score-table">
          <thead>
            <tr className="headers">
              <th>Name</th>
              <th>Time (seconds)</th>
            </tr>
          </thead>
          <tbody className="book-table-content">
            {scores.map((element) => {
              return (
                <tr key={element.id}>
                  <td className="score-name">
                    <div className="pName">{element.name}</div>
                  </td>
                  <td className="score-time">
                    <div className="time">{element.seconds}s</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
};

export default Leaderboard;
