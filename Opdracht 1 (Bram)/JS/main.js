var speler = true;

function beurt() {
  if (this.innerHTML != "") {
    return;
  }
  else {
    if (speler) {
      this.innerHTML = '<img src="IMG/x.png">';
    }
    else {
      this.innerHTML = '<img src="IMG/o.png">';
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
