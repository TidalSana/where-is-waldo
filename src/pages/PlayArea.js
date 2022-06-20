import { useState, useEffect } from "react";

// components
import Grass from "../components/maps/Grass";
import Fountain from "../components/maps/Fountain";
import Space from "../components/maps/Space";
import mapOne from "../images/kirby.png";
import mapTwo from "../images/kirby1.png";
import mapThree from "../images/kirby2.jpg";

// Firebase
// firestore cloud
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase/config";

const PlayArea = (props) => {
  const { level } = props;
  // open or close box
  const [click, setClick] = useState(false);
  // for styling of selector
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  // coordinates for character
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });
  // character
  const [character, setCharacter] = useState(null);
  const style = {
    left: mousePos.x,
    top: mousePos.y,
  };
  const getClick = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    const realX = Math.round(
      (offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const realY = Math.round(
      (offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    // console.log(realX);
    // console.log(realY);
    setClick(!click);
    setMousePos((prevState) => ({
      ...prevState,
      x: e.pageX + "px",
      y: e.pageY + "px",
    }));
    setCoords((prevState) => ({
      ...prevState,
      x: realX,
      y: realY,
    }));
  };
  // grabs value of selector box
  const getCharacter = (e) => {
    const { dataset } = e.target;
    setCharacter(dataset.value);
    setClick(!click);
  };
  useEffect(() => {
    const checkCoord = async (xCoord, yCoord) => {
      try {
        const docStar = doc(db, "coordinates", level, character, "values");
        const starSnap = await getDoc(docStar);

        const xKirbyRight = starSnap.data().xCoord + 3;
        const xKirbyLeft = starSnap.data().xCoord - 3;
        const yKirbyUp = starSnap.data().yCoord - 3;
        const yKirbyDown = starSnap.data().yCoord + 3;

        if (
          xCoord >= xKirbyLeft &&
          xCoord <= xKirbyRight &&
          yCoord >= yKirbyUp &&
          yCoord <= yKirbyDown
        ) {
          console.log("within");
          return true;
        }
        console.log("not within");
        return false;
      } catch (error) {
        console.log("No Character Defined yet");
      }
    };
    checkCoord(coords.x, coords.y);
  }, [character, coords.x, coords.y, level]);
  return (
    <div className={`play-area ${level}-area flex`}>
      {level === "grass" ? (
        <Grass
          image={mapOne}
          click={getClick}
          style={style}
          toggle={click}
          selection={getCharacter}
        />
      ) : (
        ""
      )}
      {level === "fountain" ? <Fountain image={mapTwo} click={getClick} /> : ""}
      {level === "space" ? <Space image={mapThree} click={getClick} /> : ""}
    </div>
  );
};

export default PlayArea;
