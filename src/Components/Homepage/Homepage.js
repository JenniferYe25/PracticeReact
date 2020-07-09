import React from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import "./Homepage.css";

export default function Homepage({ showGame }) {
  // play button (change showGame state)
  return (
    <div id="flex">
      <RemoveScrollBar />
      <div>
        <h1 className="text-center">
          <span>Treasure Chest Randomizer</span>
        </h1>
      </div>
      <button id="start" className="btn btn-lg btn-danger" onClick={showGame}>
        Start
      </button>
      <img id="background" src="/background.jpg" alt="backgroundImg" />
    </div>
  );
}
