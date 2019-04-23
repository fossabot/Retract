const remote = require('electron').remote;
var path = require('path');

document.getElementById("exit").addEventListener("click", function(e) {
  connectionEnd();
  var window = remote.getCurrentWindow();
  window.close();
});

function settingsMenu() {
  var setAnim = document.getElementById("Settings");
  if (setAnim.classList.contains("sAnim-up") == '1') {
    setAnim.classList.toggle("sAnim-up", false);
    setAnim.classList.toggle("sAnim-down", true);
  } else {
    setAnim.classList.toggle("sAnim-up", true);
    setAnim.classList.toggle("sAnim-down", false);
  }
}

function invertMode() {
  var themeM = document.body.getAttribute("theme");
  var themeImgs = ["Tag", "whatimg", "headin", "set-card1", "set-card2"];
  var navIcons = ["ico1", "ico2", "ico3", "ico4", "ico5", "ico6"];
  if (themeM == "light") {
    document.body.setAttribute("theme", "dark");
    for (var i = 0; i < themeImgs.length; i++) {
      document.getElementById(themeImgs[i]).setAttribute("theme", "dark");
    }
    for (var i = 0; i < navIcons.length; i++) {
      document.getElementById(navIcons[i]).style.filter = "brightness(0%) saturate(100%) invert(54%) sepia(85%) saturate(1508%) hue-rotate(218deg) brightness(103%) contrast(102%)";
    }
  } else {
    document.body.setAttribute("theme", "light");
    for (var i = 0; i < themeImgs.length; i++) {
      document.getElementById(themeImgs[i]).setAttribute("theme", "light");
    }
    for (var i = 0; i < navIcons.length; i++) {
      document.getElementById(navIcons[i]).style.filter = "";
    }
  }
}

function createSearch() {
  var choiceItem = document.getElementsByClassName("choices__item");
  var searchList = [];
  for (var i = 0; i < choiceItem.length; i++) {
    searchList.push(choiceItem[i].getAttribute("data-value"));
  }
  console.log(searchList);
}
