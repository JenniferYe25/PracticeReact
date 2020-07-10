import React, {useState} from "react";
import "./Buttons.css";

export default function Buttons ({openChest, closeChest, showGame}) {

 const [Play, setPlay] = useState(false);

 // determines whether to hide or show Play button
   const PlayButton = () => {
     setPlay(!Play);
   }

   // display Play button or Play Again button
  return (
    <div> 
    
    <button id="flexx" className={Play ? "hide" : "btn btn-success"} onClick={() => {openChest();PlayButton();}}>Play</button>
    <button id="flexx" className={Play ? "btn btn-success" : "hide"} onClick={() => {closeChest();PlayButton();}}>Play Again</button>
    <button id="quit" className="btn btn-warning" onClick={showGame}>Quit</button>
    
    </div>
    );
  }