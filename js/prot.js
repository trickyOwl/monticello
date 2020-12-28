var testInput = document.querySelector("#my-input");
var hiddenOverlay = document.querySelector(".overlay-block");

var closingBtn = document.querySelector(".close-btn");

function overlay(){
  testInput.style.visibility = "hidden";
  hiddenOverlay.style.display = "block";
  hiddenOverlay.style.zIndex = "3";
};


function hiding(){
  testInput.style.visibility = "";
  hiddenOverlay.style.display = "none";
  hiddenOverlay.style.zIndex = "-3";
};


testInput.addEventListener('click',overlay);
closingBtn.addEventListener('click',hiding);
