//Verschillende namen voor de Array (Zodat dat goed op het formulier kan staan)
var veldenNed = ["Naam:","Adres:","Woonplaats:", "Postcode:", "Geboortedatum:", "Nationaliteit:", "Beroep:", "Opmerkingen: "];
var veldenEng = ["Name:","Address:","Residence:","Postcode:","Date of Birth:","Nationality:","Work:", "Comments: "];
//Functie om leeftijd te berekenen
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

//Kiezen voor Nederlands of Engels
$(document).ready(function(){
  $("#nederlands").click(function(){
    $("#kiesTaal").fadeOut("slow");
    $("#ned").fadeIn("slow");
    $("td.nedtext").each(function(i,ind){
      $(`#${ind.id}`).text(veldenNed[i]);
    });
  });
  $("#engels").click(function(){
    $("#kiesTaal").fadeOut("slow");
    $("#eng").fadeIn("slow");
    $("td.engtext").each(function(i,ind){
      $(`#${ind.id}`).text(veldenEng[i]);
    });
  });
});

//Kiezen tussen man en vrouw
$(".male").click(function(){
    $("body").css("background-color","green");
    $("input[type='text']").css("background-color","LightGreen");
    $("input[type='date']").css("background-color","LightGreen");
    $("textarea").css("background-color","LightGreen");
  });
  $(".female").click(function(){
    $("body").css("background-color","purple");
    $("input[type='text']").css("background-color","pink");
    $("input[type='date']").css("background-color","pink");
    $("textarea").css("background-color","pink");
  });
