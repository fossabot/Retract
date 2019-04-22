const remote = require('electron').remote;

document.getElementById("exit").addEventListener("click", function(e) {
  connectionEnd();
  var window = remote.getCurrentWindow();
  window.close();
});

function settingsMenu() {
  var element = document.getElementById("Settings");
  if (element.classList.contains("sAnim-up") == '1') {
    element.classList.toggle("sAnim-up", false);
    element.classList.toggle("sAnim-down", true);
  } else {
    element.classList.toggle("sAnim-up", true);
    element.classList.toggle("sAnim-down", false);
  }
}
