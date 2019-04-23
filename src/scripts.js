const remote = require('electron').remote;

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
  var themeImgs = ["Tag", "whatimg", "headin"];
  if (themeM == "light") {
    document.body.setAttribute("theme", "dark");
    for (var i = 0; i < themeImgs.length; i++) {
      document.getElementById(themeImgs[i]).setAttribute("theme", "dark");
    }
  } else {
    document.body.setAttribute("theme", "light");
    for (var i = 0; i < themeImgs.length; i++) {
      document.getElementById(themeImgs[i]).setAttribute("theme", "light");
    }
  }
}
