//Verschillende namen voor de Array (Zodat dat goed op het formulier kan staan)
var veldenNed = ["Naam:","Adres:","Woonplaats:", "Postcode:", "Geboortedatum:", "Nationaliteit:", "Beroep:", "Opmerkingen: "];
var veldenEng = ["Name:","Address:","Residence:","Postalcode:","Date of Birth:","Nationality:","Work:", "Comments: "];
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
  //Als je op submit klikt. (Testen of alles klopt)
  $("#nedbutton").click(function(){
    var name = $("#name").val();
    var adres = $("#address").val();
    var plaats = $("#place").val();
    var postcode = $("#post").val();
    var geboortedatum = $("#date").val();
    var nationaliteit = $("#nation").val();
    var beroep = $("#beroep").val();
    if(!/^\D*$/.test(name)){
      alert("Naam is niet correct");
    }
    if(!/^[a-zA-Z$]*\s[0-9]*$/.test(adres)){
      alert("Adres is niet correct");
    }
    if(!/^[a-zA-z]*$/.test(plaats)){
      alert("Plaats is niet correct");
    }
    if(!/^[0-9]{4}\s[a-zA-Z]{2}$/.test(postcode)){
      alert("Postcode is niet correct");
    }
    if(/^\d{4}-\d{2}-\d{2}$/.test(geboortedatum)){
      let age = getAge(geboortedatum);
      $("#oud").text("Je wordt " + (age+=1) + " jaar oud");
      $("#oud").fadeIn("slow");
    }
    if(!/^\D*$/.test(nationaliteit)){
      alert("Nationaliteit is niet correct");
    }
    if(!/^\D*$/.test(beroep)){
      alert("Beroep is niet correct");
    }
  });
  $("#engbutton").click(function(){
    var engname = $("#engname").val();
    var engadres = $("#engaddress").val();
    var engplaats = $("#engplace").val();
    var engpostcode = $("#engpost").val();
    var enggeboortedatum = $("#engdate").val();
    var engnationaliteit = $("#engnation").val();
    var engberoep = $("#engberoep").val();
    if(!/^\D*$/.test(engname)){
      alert("Name is not correct");
    }
    if (!/^\d+\s[A-z]+\s[A-z]+$/.test(engadres)){
      alert("Address is not correct");
    }
    if(!/^[a-zA-z]*$/.test(engplaats)){
      alert("Residence is not correct");
    }
    if(!/[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/.test(engpostcode)){
      alert("Postalcode is not correct");
    }
    if(/^\d{4}-\d{2}-\d{2}$/.test(enggeboortedatum)){
      let age = getAge(enggeboortedatum);
      $("#engoud").text("You'll be  " + (age+=1) + " years old");
      $("#engoud").fadeIn("slow");
    }else{
      alert("Date Of Birth is not correct");
    }
    if(!/^\D*$/.test(engnationaliteit)){
      alert("Nationality is not correct");
    }
    if(!/^\D*$/.test(engberoep)){
      alert("Work is not correct");
    }
  });
