//  var redButton = document.querySelector(".red-button");
//
//  var sectionOne = document.querySelector("#additional-content-1");
//  var sectionTwo = document.querySelector("#additional-content-2");
//
//  var showOne = sectionOne.style.display;
//  var showTwo = sectionTwo.style.display;
//
//  var clickCount = 0;
//
//  function showingContent(){
//   clickCount += 1;
//   console.log(clickCount);
//   if (clickCount == 1) {
//   sectionOne.style.display = "block";
// } else if(clickCount == 2) {
//     sectionTwo.style.display = "block";
//     redButton.style.display = 'none';
//    }
// }
// redButton.addEventListener("click",showingContent);

//второй более адекватный и универсальный вариант

var redButton = document.querySelector(".red-button");
var sectionsArray = document.querySelectorAll(".additional-content");
//var lastArrayElement = (sectionsArray-1);
let clickCount = 0;
function showingContent(){
  //console.log(clickCount);
  //console.log(sectionsArray[clickCount]);
  sectionsArray[clickCount].style.display = "block";
  if (clickCount == (sectionsArray.length-1)) {
    sectionsArray[clickCount].style.display = "block";
    redButton.style.display = 'none';
  }
  clickCount+=1;
};
redButton.addEventListener("click",showingContent);



// блок кода для модуля 14
var testInput = document.querySelector("#search-overlay");
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
