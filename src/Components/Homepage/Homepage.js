import React from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import "./Homepage.css";
import useSound from 'use-sound';
import sound from '../Homepage/pop.mp3';

export default function Homepage({ showGame }) {
  // play button (change showGame state)
  const [play] = useSound(sound);
  function startClicked () {
    showGame();
    play();
  }
  return (
    <div id="flex">
      <RemoveScrollBar />
      <div id="title">
        <h1 className="text-center">
          <span>Treasure Chest Randomizer</span>
        </h1>
      </div>
      <button id="start" className="btn btn-lg btn-danger" onClick={startClicked}>
        Start
      </button>
      {/* <img id="background" src="/background.jpg" alt="backgroundImg" /> */}
    </div>
  );
}
