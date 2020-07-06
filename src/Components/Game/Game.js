import React, { useState } from "react";
import Buttons from "../Buttons";
import Chest from "../Chest";

export default function Game() {
  // chest opened state
  const [chests, setChests] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // handle picking random chest
  var handleOpenChest = () => {
    // set random chest to true
    // should only be able to open one
  };

  // play again (reset chests)
  var handleCloseChest = () => {
    // set all chests
  };

  return (
    <>
      <Chest opened={chests[0]} chestNumber={0} />
      <div className="button-div">
        <Buttons openChest={handleOpenChest} />
      </div>
    </>
  );
}
