"use strict";

let picSrc = document.getElementById("img-monkey").src;

function changePic() {
  console.log(picSrc);
  if (document.getElementById("img-monkey").src === picSrc) {
    document.getElementById("img-monkey").src = "openHand.png";
  } else {
    document.getElementById("img-monkey").src = "closeHand.png";
  }
}
