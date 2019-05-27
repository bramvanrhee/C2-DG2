//Verschillende namen voor de Array
var veldenNed = ["Naam:","Adres:","Woonplaats:", "Postcode:", "Geboortedatum:", "Nationaliteit:", "Beroep:", "Opmerkingen: "];
var veldenEng = ["Name:","Address:","Residence:","Postcode:","Date of Birth:","Nationality:","Work:", "Comments: "];
//Functie om leeftijd te berekenen
function leeftijd (dateString) {
  var vandaag = new Date();
  var geboren = new Date (dateString);
  var jaar = vandaag.getFullYear() - geboren.getFullYear();
  var maand = vandaag.getMonth() - geboren.getMonth();
  if (maand < 0 || (maand === 0 && vandaag.getDate() < geboren.getDate())) {
          jaar--;
      }
      return jaar;
}
//Kiezen voor Nederlands of Engels
$(document).ready(function(){
  $("#nederlands").click(function(){
    $("#kiesTaal").fadeOut("slow");
    $("#ned").fadeIn("slow");
    $("td.nedtext").each(function(i,ind){
      $(`#${ind.id}`).text(nedvelden[i]);
    });
  });
  $("#engels").click(function(){
    $("#kiesTaal").fadeOut("slow");
    $("#eng").fadeIn("slow");
    $("td.engtext").each(function(i,ind){
      $(`#${ind.id}`).text(engvelden[i]);
    });
  });
});
