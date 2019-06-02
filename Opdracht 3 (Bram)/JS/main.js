var linksarray = [];
var rechtsarray = [];

$(document).ready(function() {
  $('#toevoegen').click(function() {
    if($('#naam').val() != "") {
      linksarray.push($('#naam').val() + "<br>");
      document.getElementById('b1').innerHTML = linksarray.join("");
    }
  });
});
