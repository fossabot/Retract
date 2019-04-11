const remote = require('electron').remote;

document.getElementById("exit").addEventListener("click", function(e) {
  var window = remote.getCurrentWindow();
  window.close();
});
