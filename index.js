// Constants
const DELAY_SPECIAL_REND = 3800;
const DELAY_DRACO_METEOR = 3800;
const DELAY_THUNDER_DAMAGE = 2200;
const DELAY_TAKE_DAMAGE = 2800;
const DELAY_RESET_TEXT = 5000;

//Dom elements
let healthBarP1 = document.getElementById("hpP1");
let healthBarP2;
const fightbtn = document.querySelector('#fightBtn');
const switchbtn = document.querySelector("#switchBtn");
const medicinebtn = document.querySelector("#medicineBtn");
const escapebtn = document.querySelector("#escapeBtn");
const mytext = document.querySelector("#myAction");
const xpText = document.querySelector("#xpText");
let healthP1 = document.querySelector("#healthp1");
let healthP2 = document.querySelector("#healthp2");
let damageReceivedP1;
let disableButtons = document.getElementsByClassName("buttons").disabled = true;

//Sound effects Audio(Dom)

const hitWeak = new Audio("https://static.wikia.nocookie.net/soundeffects/images/5/50/Hit_Weak_Not_Very_Effective.mp3");

//Palkia Attacks Audio 

const SpacialRendAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/zxleqbbksw/Spacial%20Rend.mp3");
const dracoMeteorAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/suixdkkdnp/Draco%20Meteor%20part%202.mp3");
const thunderAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/hbxbekeqme/Thunder.mp3");
const hydroPumpAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/amtoihsobt/Hydro%20Pump.mp3");

//Arceus Attacks Audio

const OutrageAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/ymomvvsqfm/Outrage.mp3");
const extremeSpeedAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/skildcdkaa/Extreme%20Speed.mp3");
const earthquake = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/jcjuqoeair/Earthquake.mp3");
const recover = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/ognsvhbaku/Recover.mp3");


// Available Pokemon

const availablePokemon = {
  
  "Palkia":{
    "moves":["Spacial Rend","Draco Meteor","Hydro Pump", "Thunder"],
    "buttonText": ["Fight", "Switch", "Medicine", "Escape"]
   },
  
   "Dialga":{
    "moves":["Flash Canon","Aura Sphere","Earth Power", "Dragon Pulse"],
    "buttonText": ["Fight", "Switch", "Medicine", "Escape"]
   },

   "Giratina":{
    "moves":["Shadow Force","Outrage","Shadow Sneak", "Wi-o-Wisp"],
    "buttonText": ["Fight", "Switch", "Medicine", "Escape"]
   },

   "Arceus":{
    "moves":["Outrage","Extreme Speed","Earthquake", "Recover"],
    "buttonText": ["Fight", "Switch", "Medicine", "Escape"]
   },
};


// Game state 
let isFighting = false;

//Setting Fighting State

fightbtn.onclick = function(){

  if(!isFighting){
   fight();

} else{
  spacialRend();
}
}

//Perform Attacks

switchbtn.onclick = function(){
  
  if(isFighting){
    dracoMeteor();
 
 }  else{
   ( mytext.textContent = "Are you Switching Pokemon?");
 }
 }
 


// Update UI for fight mode

function fight(){
 
fightbtn.classList.add("fightButtonPressed");
switchbtn.classList.add("switchButtonPressed");
medicinebtn.classList.add("medicineButtonPressed");
escapebtn.classList.add("escapeButtonPressed");

fightbtn.innerText = availablePokemon.Palkia.moves[0];
switchbtn.innerText = availablePokemon.Palkia.moves[1];
medicinebtn.innerText = availablePokemon.Palkia.moves[2];
escapebtn.innerText =availablePokemon.Palkia.moves[3]

return isFighting=true;
}

  // Different attacks  of Player Pokemon 

function spacialRend(){
  mytext.textContent = "Palkia Used " + availablePokemon.Palkia.moves[0];
  SpacialRendAudio.play();

  setTimeout(attackText, DELAY_SPECIAL_REND);
  setTimeout(calculateDamage, DELAY_TAKE_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);

  fightbtn.classList.add("fightButtonHidden");
  switchbtn.classList.add("switchButtonHidden");
  medicinebtn.classList.add("medicineButtonHidden");
  escapebtn.classList.add("escapeButtonHidden");
 

 }

 
 function dracoMeteor(){
  mytext.textContent = "Palkia Used " + availablePokemon.Palkia.moves[1];
  dracoMeteorAudio.play();

  setTimeout(attackText, DELAY_DRACO_METEOR);
  setTimeout(calculateDamage, DELAY_TAKE_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);

  fightbtn.classList.add("fightButtonHidden");
  switchbtn.classList.add("switchButtonHidden");
  medicinebtn.classList.add("medicineButtonHidden");
  escapebtn.classList.add("escapeButtonHidden");

 }

 escapebtn.onclick = function(){
  
  if(isFighting){
    thunder();
 
 } else[
  escape()
 ]
 }
 
 function thunder(){
  mytext.textContent = "Palkia Used " + availablePokemon.Palkia.moves[3];
  thunderAudio.play();

  setTimeout(attackText, DELAY_DRACO_METEOR);
  setTimeout(calculateDamage, DELAY_THUNDER_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);

  fightbtn.classList.add("fightButtonHidden");
  switchbtn.classList.add("switchButtonHidden");
  medicinebtn.classList.add("medicineButtonHidden");
  escapebtn.classList.add("escapeButtonHidden");
 
 }

 medicinebtn.onclick = function(){
  
  if(isFighting){
    hydroPump();
     
 } else[
  heal()
 ]
 }
 
 function hydroPump(){
  mytext.textContent = "Palkia Used " + availablePokemon.Palkia.moves[2];
 hydroPumpAudio.play();

  setTimeout(attackText, DELAY_DRACO_METEOR);
  setTimeout(calculateDamage, DELAY_THUNDER_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);

  fightbtn.classList.add("fightButtonHidden");
  switchbtn.classList.add("switchButtonHidden");
  medicinebtn.classList.add("medicineButtonHidden");
  escapebtn.classList.add("escapeButtonHidden");  
 }


 // Perform Damage Calculation And Display it 

 function calculateDamage(){
  hitWeak.play();
  healthP1.value -= Math.floor(Math.random() * (12 - 22) + 22);
  healthBarP1.textContent = healthP1.value;
}

// Display attack text

 function attackText() {
  
   mytext.textContent = "It's not Very Effective";
  
  }

 /* function damageText(){
    
    damageReceivedP1 = 100 - (healthP1.value)
    mytext.textContent = `Arceus Took ${damageReceivedP1} points of damage`; Να το εξετάσουμε
}*/ 


// Enemy Pokemon random attacks 


// Different attacks  of Enemy Pokemon 

function Outrage(){
  mytext.textContent = "Arceus Used " + pokemonMoves[3][1];
  OutrageAudio.play();
}
 /* setTimeout(attackText, DELAY_SPECIAL_REND);
  setTimeout(calculateDamage, DELAY_TAKE_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);
  fightbtn.classList.add("fightButtonHidden");
  switchbtn.classList.add("switchButtonHidden");
  medicinebtn.classList.add("medicineButtonHidden");
  escapebtn.classList.add("escapeButtonHidden");
 }

 
 function dracoMeteor(){
  mytext.textContent = "Palkia Used " + pokemonMoves[0][1];
  dracoMeteorAudio.play();
  setTimeout(attackText, DELAY_DRACO_METEOR);
  setTimeout(calculateDamage, DELAY_TAKE_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);
  fightbtn.classList.add("fightButtonHidden");
  switchbtn.classList.add("switchButtonHidden");
  medicinebtn.classList.add("medicineButtonHidden");
  escapebtn.classList.add("escapeButtonHidden");
 }

  function thunder(){
  mytext.textContent = "Palkia Used " + pokemonMoves[0][3];
  thunderAudio.play();
  setTimeout(attackText, DELAY_DRACO_METEOR);
  setTimeout(calculateDamage, DELAY_THUNDER_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);
  fightbtn.classList.add("fightButtonHidden");
  switchbtn.classList.add("switchButtonHidden");
  medicinebtn.classList.add("medicineButtonHidden");
  escapebtn.classList.add("escapeButtonHidden");
 }


 function hydroPump(){
  mytext.textContent = "Palkia Used " + pokemonMoves[0][2];
 hydroPumpAudio.play();
  setTimeout(attackText, DELAY_DRACO_METEOR);
  setTimeout(calculateDamage, DELAY_THUNDER_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);
  fightbtn.classList.add("fightButtonHidden");
  switchbtn.classList.add("switchButtonHidden");
  medicinebtn.classList.add("medicineButtonHidden");
  escapebtn.classList.add("escapeButtonHidden");
 }

*/





 // Reset text and buttons to out Of Fight Mode

   function resetTextAndButtons() {
    mytext.textContent = "What Will You Do?";

  fightbtn.innerText = availablePokemon.Palkia.buttonText[0];
  switchbtn.innerText = availablePokemon.Palkia.buttonText[1];
  medicinebtn.innerText = availablePokemon.Palkia.buttonText[2];
  escapebtn.innerText = availablePokemon.Palkia.buttonText[3];

  fightbtn.classList.remove("fightButtonPressed", "fightButtonHidden");
  switchbtn.classList.remove("switchButtonPressed" , "switchButtonHidden");
  medicinebtn.classList.remove("medicineButtonPressed" , "medicineButtonHidden");
  escapebtn.classList.remove("escapeButtonPressed", "escapeButtonHidden" );

  

  return isFighting=false  
  
  }










  

  

   
