import React, { Component } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import "bootstrap/dist/css/bootstrap.css";
import "./Homepage.css";

export default function Homepage() {
  // play button (change showGame state)
  return (
    <div id="flex">
      <RemoveScrollBar />
      <div>
        <h1 className="text-center">
          <span>Treasure Chest Randomizer</span>
        </h1>
      </div>
      <button
        id="start"
        className="btn btn-lg btn-danger"
        // onClick={}
      >
        Start
      </button>
      <img id="background" src="/background.jpg" />
    </div>
  );
}
