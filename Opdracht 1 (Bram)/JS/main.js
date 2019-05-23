var speler = true;

function beurt() {
  if (this.innerHTML != "") {
    return;
  }
  else {
    if (speler) {
      this.innerHTML = '<h6>X</h6>';
    }
    else {
      this.innerHTML = '<h6>O</h6>';
    }
    speler = !speler;
  }
}

function Event() {
  var td = document.getElementsByTagName("td");
  for (var b = 0; b < td.length; ++b) {
    td[b].onclick = beurt;
  }
}
window.onload = Event;
