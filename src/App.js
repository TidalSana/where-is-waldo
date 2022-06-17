import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Nav from "./components/Nav";
import Characters from "./components/Characters";
// pages
import HomeContent from "./pages/HomeContent";
import PlayArea from "./pages/PlayArea";
// css
import "./App.css";

const App = () => {
  const [level, setLevel] = useState("grass");
  const changeMap = (e) => {
    setLevel(e.target.id);
  };
  return (
    <BrowserRouter>
      <div className="App flex">
        <Nav />
        <Characters />
        <Routes>
          <Route path="/" element={<HomeContent changeMap={changeMap} />} />
          <Route path="/play" element={<PlayArea level={level} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
