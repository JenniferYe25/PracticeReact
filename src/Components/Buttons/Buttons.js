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
    
    <button className={Play ? "hide" : "show"} onClick={() => {openChest();PlayButton();}}>Play</button>
    <button className={Play ? "show" : "hide"} onClick={() => {closeChest();PlayButton();}}>Play Again</button>
    <button id="quit" onClick={showGame}>Quit</button>
    
    </div>
    );
  }