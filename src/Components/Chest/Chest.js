import React from "react";

export default function Chest(props) {
  var image; // is what is returned to the screen

  //if chest opened is false, it displays the closed chest image
  if (props.opened === false) {
    image = <img src="/Chests.png" alt="chest" />;
  }

  //if chest opened is true, it displays the prize based on the index
  else {
    image = <img src={"/Prize" + (props.chestNumber + 1) + ".png"} alt="chest" />;
  }

  //returns the image based on the conditions above
  return <>{image}</>;
}
