var linksarray = [];
var rechtsarray = [];

$(document).ready(function() {
  $('#toevoegen').click(function() {
    if($('#naam').val() != "") {
      linksarray.push($('#naam').val() + "<br>");
      document.getElementById('b1').innerHTML = linksarray.join("");
    }
  });

  $('#rechts').click(function() {
    rechtsarray.push(linksarray.join(""));
    rechtsarray.join("");
    linksarray = [];
    document.getElementById('b1').innerHTML = linksarray.join("");
    document.getElementById('b2').innerHTML = rechtsarray;
  });
});
