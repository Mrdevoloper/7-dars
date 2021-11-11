

var formEL = document.querySelector("#elform");
var inputEl = document.querySelector("#eLinput");

var resultEl1 = document.querySelector(" Elresult1 ")
var  resultEl2 = document.querySelector("Elresult2")
var resultEl3 = document.querySelector("Elresult3 ")
var  resultEl4 = document.querySelector("Elresult4")

var SPEED_OF_HUMAN = 3.6;
var SPEED_OF_BIKE = 20.1;
var SPEED_OF_CAR = 70;
var SPEED_OF_AIR = 800;


formEL.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var distance = inputEl.value;

   var spendTimeHour = distance / SPEED_OF_HUMAN;
   var spendTimeMinut =  Math.ceil(((spendTimeHour - Math.floor(spendTimeHour)) * 60));
   Elresult1.textContent = Math.floor(spendTimeHour) +" h" 
   Elresult11.textContent = spendTimeMinut + " min"
   

   var spendTimeHour = distance / SPEED_OF_BIKE;
   var spendTimeMinut =  Math.ceil(((spendTimeHour - Math.floor(spendTimeHour)) * 60));
   Elresult2.textContent = Math.floor(spendTimeHour) +" h" 
   Elresult22.textContent = spendTimeMinut + " min"


   var spendTimeHour = distance / SPEED_OF_CAR;
   var spendTimeMinut =  Math.ceil(((spendTimeHour - Math.floor(spendTimeHour)) * 60));
   Elresult3.textContent = Math.floor(spendTimeHour) +" h" 
   Elresult33.textContent = spendTimeMinut + " min"


   var spendTimeHour = distance / SPEED_OF_AIR;
   var spendTimeMinut =  Math.ceil(((spendTimeHour - Math.floor(spendTimeHour)) * 60));
   Elresult4.textContent = Math.floor(spendTimeHour) +" h" 
   Elresult44.textContent = spendTimeMinut + " min"

});





