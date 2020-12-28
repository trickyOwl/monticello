var btn = document.querySelector("#click-me");
var mainSite = document.querySelector(".main-site");

function hidingmenu(){
  //mainSite.style.width = "85%";
  mainSite.classList.toggle('main-site-small');

};

btn.addEventListener('click',hidingmenu);
