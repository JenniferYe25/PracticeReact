import React, { useState } from "react";
import Game from "../Game";
import Homepage from "../Homepage";
import "./App.css";

const [showGame, setShowGame] = useState(false);

// handle showgame
var handleShowGame = () => {
  let gameState = !showGame;
  setShowGame(gameState);
};

function App() {
  // display homepage or game
  return (
    <>{showGame ? <Game showGame={handleShowGame} /> : <Homepage showGame={handleShowGame} />}</>
  );
}

export default App;
