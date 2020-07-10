import React, { useState } from "react";
import Game from "../Game";
import Homepage from "../Homepage";

function App() {
  const [showGame, setShowGame] = useState(false);

  // handle showgame
  var handleShowGame = () => {
    let gameState = !showGame;
    setShowGame(gameState);
  };

  // display homepage or game
  return (
    <>
      {showGame ? (
        <Game showGame={handleShowGame} />
      ) : (
        <Homepage showGame={handleShowGame} />
      )}
    </>
  );
}

export default App;
