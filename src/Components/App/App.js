import React, { useState } from "react";
import Game from "../Game";
import Homepage from "../Homepage";
import "./App.css";

function App() {
  const [showGame, setShowGame] = useState(true);

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
