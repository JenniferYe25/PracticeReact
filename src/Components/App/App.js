import React, { useState } from "react";
import Game from "../Game/Game.js"; // for some reason /Game doesnt work
import Homepage from "../Homepage";
import "./App.css";

function App() {
  const [showGame, setShowGame] = useState(false);

  // handle showgame
  var handleShowGame = () => {
    let gameState = !showGame;
    setShowGame(gameState);
  };

  // display homepage or game
  return (
    <>{showGame ? <Game showGame={handleShowGame} /> : <Homepage showGame={handleShowGame} />}</>
  );
}

export default App;
