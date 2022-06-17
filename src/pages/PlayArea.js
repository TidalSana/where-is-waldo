import { useState } from "react";
import Grass from "../components/maps/Grass";
import Fountain from "../components/maps/Fountain";
import Space from "../components/maps/Space";
import mapOne from "../images/kirby.png";
import mapTwo from "../images/kirby1.png";
import mapThree from "../images/kirby2.jpg";

const PlayArea = (props) => {
  const { level } = props;
  const [click, setClick] = useState(false);
  const [characters, setCharacters] = useState({
    optOne: "",
    optTwo: "",
    optThree: "",
  });
  // click on the map
  const getClick = (e) => {
    // const { width, height } = e.target.getBoundingClientRect();
    // const { offsetX, offsetY } = e.nativeEvent;

    // console.log(Math.round((offsetX / width) * 100));
    // console.log(Math.round((offsetY / height) * 100));
    getCharacters(level);

    if (!click) {
      console.log(characters.optOne);
      // return createSelector(e);
    }

    if (click) {
      document.querySelector(".selector").remove();
      setClick(false);
      return;
    }
  };
  // grabs the characters based on the map
  const getCharacters = (map) => {
    if (level === "grass") {
      return setCharacters(() => ({
        optOne: "Star Rod Kirby",
        optTwo: "Painter Kirby",
        optThree: "Sleepy Kirby",
      }));
    }
  };
  // const createSelector = (e) => {
  //   const selector = document.createElement("div");
  //   const image = document.querySelector(`.play-area`);
  //   selector.className = "selector";
  //   selector.innerHTML = `
  //     <div className="selec-options first-character">${characters.optOne}</div>
  //     <div className="selec-options second-character">${characters.optTwo}</div>
  //     <div className="selec-options third-character">${characters.optThree}</div>
  //   `;
  //   selector.style.left = e.pageX + "px";
  //   selector.style.top = e.pageY + "px";
  //   image.appendChild(selector);
  //   setClick(true);
  // };
  // useEffect(() => {}, [characters]);
  return (
    <div className={`play-area ${level}-area flex`}>
      {level === "grass" ? <Grass image={mapOne} click={getClick} /> : ""}
      {level === "space" ? <Fountain image={mapTwo} click={getClick} /> : ""}
      {level === "space" ? <Space image={mapThree} click={getClick} /> : ""}
    </div>
  );
};

export default PlayArea;
