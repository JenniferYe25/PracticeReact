import React from "react";
// import Game from "../Game";
import "./Buttons.css";

export default function Buttons ({openChest}, {closeChest}) {


  return (
    <div className = "button">
        <button onClick={openChest}>Play</button>
        <button onClick={closeChest}>Play Again</button> 
    </div>
    
  );
 }

  // handle click function

  // start button (handleOpenChests)
  // quit button (), play again button (together)
  // <button onClick={handleCloseChest}>Play Again</button>  