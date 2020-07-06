import React from "react";
//importing all the images to use
import Chests from "./Images/Chests.png";
import Prize1 from "./Images/Prize1.png";
import Prize2 from "./Images/Prize2.png";
import Prize3 from "./Images/Prize3.png";
import Prize4 from "./Images/Prize4.png";
import Prize5 from "./Images/Prize5.png";
import Prize6 from "./Images/Prize6.png";
import Prize7 from "./Images/Prize7.png";
import Prize8 from "./Images/Prize8.png";
import Prize9 from "./Images/Prize9.png";

export default function Chest(props) {
  var image; // is what is returned to the screen
  var images = new Array(9); //array of all the prize images to display based on the prop values
  images[0,1,2,3,4,5,6,7,8] = new Image(); //declared to be an image

  //each prize image is assigned to an index of the array
  images[0] = <img src={Prize1} alt="Prize 1" />;
  images[1] = <img src={Prize2} alt="Prize 2" />;
  images[2] = <img src={Prize3} alt="Prize 3" />;
  images[3] = <img src={Prize4} alt="Prize 4" />;
  images[4] = <img src={Prize5} alt="Prize 5" />;
  images[5] = <img src={Prize6} alt="Prize 6" />;
  images[6] = <img src={Prize7} alt="Prize 7" />;
  images[7] = <img src={Prize8} alt="Prize 8" />;
  images[8] = <img src={Prize9} alt="Prize 9" />;

//if chest opened is false, it displays the closed chest image
if(props.opened == false){
  image = <img src={Chests} alt="chest"/>
}

//if chest opened is true, it displays the prize based on the index
else{
    image = images[props.chestNumber];
}

//returns the image based on the conditions above
return <>{image}</>;
}
