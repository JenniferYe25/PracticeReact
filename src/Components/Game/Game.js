import React from "react";
import Buttons from "../Buttons";
import Chest from "../Chest";

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
var handleOpenChest = () => {};

// play again (reset chests)
var handleOpenChest = () => {};

export default function Game() {
  return (
    <>
      <Chest opened={} />
      <Buttons openChest={handleOpenChest} />
    </>
  );
}
