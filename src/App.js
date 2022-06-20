import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Nav from "./components/Nav";
import Characters from "./components/Characters";
// pages
import HomeContent from "./pages/HomeContent";
import PlayArea from "./pages/PlayArea";
// images
import starKirby from "./images/starKirby.png";
import paintKirby from "./images/paintKirby.png";
import sleepKirby from "./images/sleepKirby.png";
// css
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const [level, setLevel] = useState(null);
  const [abilities, setAbilities] = useState({
    abilityOne: "",
    abilityTwo: "",
    abiliityThree: "",
  });
  const changeMap = (e) => {
    setLevel(e.target.id);
  };
  const resetAbility = () => {
    setLevel(null);
  };
  useEffect(() => {
    if (level === "grass") {
      setAbilities((prevState) => ({
        ...prevState,
        abilityOne: starKirby,
        abilityTwo: paintKirby,
        abilityThree: sleepKirby,
      }));
    }
  }, [level]);
  return (
    <BrowserRouter>
      <div className="App flex">
        <Nav reset={resetAbility} />
        {level ? <Characters kirby={abilities} /> : ""}
        <Routes>
          <Route path="/" element={<HomeContent changeMap={changeMap} />} />
          <Route path="/play" element={<PlayArea level={level} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
