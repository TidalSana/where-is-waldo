import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// components
import Nav from "./components/Nav";
import Characters from "./components/Characters";
import Win from "./components/Modal";
import Leaderboard from "./pages/Leaderboard";
// pages
import HomeContent from "./pages/HomeContent";
import PlayArea from "./pages/PlayArea";
// grass
import starKirby from "./images/starKirby.png";
import paintKirby from "./images/paintKirby.png";
import sleepKirby from "./images/sleepKirby.png";
// fountain
import qdKirby from "./images/qdKirby.png";
import ufoKirby from "./images/ufoKirby.png";
// space
import staffKirby from "./images/staffKirby.png";
import spiderKirby from "./images/spiderKirby.png";
// css
import "./App.css";
import { useEffect } from "react";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import db from "./firebase/config";

const App = () => {
  const [level, setLevel] = useState(null);
  const [abilities, setAbilities] = useState({
    abilityOne: "",
    abilityTwo: "",
    abiliityThree: "",
    kirbyOne: "",
    kirbyTwo: "",
    kirbyThree: "",
  });
  const [found, setFound] = useState([]);
  const [time, setTime] = useState(null);
  const [game, setGame] = useState(false);
  const [score, setScore] = useState({
    name: null,
    time: null,
  });

  const changeMap = (e) => {
    setLevel(e.target.id);
  };
  const addFound = (character) => {
    setFound((prevState) => [...prevState, character]);
  };
  const checkFound = (array) => {
    const images = document.getElementsByClassName("ability-img");
    for (let item of images) {
      for (let kirby of array) {
        if (item.id === kirby) {
          item.classList.add("found");
        }
      }
    }
  };
  const resetAbility = () => {
    setLevel(null);
    setFound([]);
    setTime(null);
    setGame(false);
    setAbilities({
      abilityOne: "",
      abilityTwo: "",
      abiliityThree: "",
      kirbyOne: "",
      kirbyTwo: "",
      kirbyThree: "",
    });
    setScore({
      name: null,
      time: null,
    });
  };
  const markScore = (e) => {
    e.preventDefault();
    const value = document.querySelector(".user-name").value;

    setScore(() => ({
      name: value,
      time: time.seconds,
    }));
  };
  useEffect(() => {
    if (!score.name) return;
    const postUser = async () => {
      const userRef = await addDoc(collection(db, "users"), {
        name: score.name,
      });
      const leadRef = await setDoc(doc(db, "leaderboard", userRef.id), {
        id: userRef.id,
        level: level,
        name: score.name,
        seconds: score.time,
      });
    };
    postUser();
    resetAbility();
  }, [game, level, score]);
  useEffect(() => {
    if (level === "grass") {
      setAbilities((prevState) => ({
        ...prevState,
        abilityOne: starKirby,
        abilityTwo: paintKirby,
        abilityThree: sleepKirby,
        kirbyOne: "Star Rod Kirby",
        kirbyTwo: "Painter Kirby",
        kirbyThree: "Sleep Kirby",
      }));
    }
    if (level === "fountain") {
      setAbilities((prevState) => ({
        ...prevState,
        abilityOne: starKirby,
        abilityTwo: qdKirby,
        abilityThree: ufoKirby,
        kirbyOne: "Star Rod Kirby",
        kirbyTwo: "Quick Draw Kirby",
        kirbyThree: "UFO Kirby",
      }));
    }
    if (level === "space") {
      setAbilities((prevState) => ({
        ...prevState,
        abilityOne: starKirby,
        abilityTwo: spiderKirby,
        abilityThree: staffKirby,
        kirbyOne: "Star Rod Kirby",
        kirbyTwo: "Spider Kirby",
        kirbyThree: "Staff Kirby",
      }));
    }
  }, [level]);
  useEffect(() => {
    checkFound(found);
    if (found.length === 3) {
      setGame(true);
    }
  }, [found]);
  return (
    <BrowserRouter basename="/">
      <div className="App flex">
        <Nav reset={resetAbility} />
        <div className="main-content flex">
          {game && time ? (
            <Win time={time} click={markScore} reset={resetAbility} />
          ) : (
            ""
          )}
          {level ? (
            <Characters kirby={abilities} time={setTime} game={game} />
          ) : (
            ""
          )}
          <Routes>
            <Route path="/" element={<HomeContent changeMap={changeMap} />} />
            <Route
              path="/play"
              element={
                <PlayArea level={level} found={addFound} kirby={abilities} />
              }
            />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
        <footer className="footer flex">
          <p>
            Made by <FontAwesomeIcon icon={faGithub} />
            <a className="footer-link" href="https://github.com/TidalSana">
              TidalSana
            </a>
            .2022
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
