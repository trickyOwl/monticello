var startBtn = document.querySelector("#startingEvents");
var scndBlock = document.querySelector("#second-block");
var overlay = document.querySelector(".overlay");
var closingButton = document.querySelector(".overlay");

function getSecondName(dataCounter){
  let secondsName = " секунд";
  switch(dataCounter){
    case "1":
      secondsName += "а";
      break;
    case "2":
    case "3":
    case "4":
      secondsName += "ы";
      break;
  }
  return secondsName;
};

function hidingallshit(){
  overlay.style.display = "none";
  scndBlock.style.display = "none";
  startBtn.style.display = "none";
};

function showMiliSeconds(){
  let timerId = setInterval(countingMiliSeconds, 400);
  function countingMiliSeconds(){
  let dataCounter = scndBlock.dataset.counter;

  scndBlock.value = dataCounter < 50 ? dataCounter:50;
  dataCounter++;
  scndBlock.dataset.counter = dataCounter;

  if(dataCounter > 50) {
      clearInterval(timerId);
      setTimeout(() => overlay.style.display = "block",40)
    }
  }
};

function caseTwo(){
  startBtn.style.background = "#FF0000";
  startBtn.style.color = "white";
  scndBlock.style.display = "block";
  showMiliSeconds();
};

function moving(){
    startBtn.classList.add("move");
};

function caseOne() {
  startBtn.style.background = "#A9A9A9";
  startBtn.style.color = "#000000";
  startBtn.style.border = "1px solid #000000";

    // код для счета
    let timerId = setInterval(showingSeconds, 1000);
    function showingSeconds(){

    let dataCounter = startBtn.dataset.counter;
    console.log(dataCounter);
    let timeValue = startBtn.value;


    startBtn.value = dataCounter + getSecondName(dataCounter);
    dataCounter++;
    startBtn.dataset.counter = dataCounter;

    if(dataCounter == 6) {
        clearInterval(timerId);
        setTimeout(() => startBtn.value = 'Готово', 1000)
        setTimeout(() => startBtn.classList.add("move"), 2000)
      }
    //setTimeout(caseTwo,7500);
  }
};

//запускаем весь механизм
startBtn.addEventListener('click',caseOne);
startBtn.addEventListener('transitionend',caseTwo);
closingButton.addEventListener('click',hidingallshit);
