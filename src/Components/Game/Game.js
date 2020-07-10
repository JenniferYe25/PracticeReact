import React, { useState } from "react";
import Buttons from "../Buttons";
import Chest from "../Chest";
import "./Game.css";

export default function Game({ showGame }) {
  // chest opened state
  const [chests, setChests] = useState(new Array(9).fill(false));

  // handle picking random chest
  var handleOpenChest = () => {
    // set random chest to true if none are already
    let anyTrue = chests.includes(true);
    if (!anyTrue) {
      let newChests = [...chests];
      newChests[Math.floor(Math.random() * newChests.length)] = true;
      setChests(newChests);
    }
  };

  // play again (reset chests)
  var handleCloseChest = () => {
    // set all chests to false
    let falseChests = new Array(9).fill(false);
    setChests(falseChests);
  };

  // return row of chests
  var returnChests = (n) => {
    let chest_comps = [];
    for (let i = n; i < n + 3; i++) {
      chest_comps.push(
        <td key={i + 10}>
          <Chest key={i} opened={chests[i]} chestNumber={i} />
        </td>
      );
    }
    return chest_comps;
  };

  return (
    <>
      <div className="table-div">
        <table>
          <tbody>
            <tr>{returnChests(0)}</tr>
            <tr>{returnChests(3)}</tr>
            <tr>{returnChests(6)}</tr>
          </tbody>
        </table>
      </div>

      <div className="button-div">
        <Buttons
          openChest={handleOpenChest}
          closeChest={handleCloseChest}
          showGame={showGame}
        />
      </div>
    </>
  );
}
