var divs = ["ver", "cls", "time", "date", "cd", "md", "dir", "help", "move"];
var visibleId = null;
function show(id) {
  if(visibleId !== id) {
    visibleId = id;
  } 
  hide();
}

function hide() {
  var div, i, jp;
  for(i = 0; i < divs.length; i++) {
    jp = divs[i];
    div = document.getElementById(jp);
    if(visibleId === jp) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
} 