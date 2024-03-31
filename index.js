// Constants
const DELAY_SPECIAL_REND = 3800;
const DELAY_DRACO_METEOR = 3800;
const DELAY_RECOVER = 2200;
const DELAY_RECOVERY_TEXT = 3800;
const DELAY_THUNDER_DAMAGE = 2200;
const DELAY_TAKE_DAMAGE = 2800;
const DELAY_OPPONENT_ATTACK = 6000;
const DELAY_RESET_TEXT = 7000;


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
const hitStrong = new Audio("https://static.wikia.nocookie.net/soundeffects/images/c/c2/Hit_Super_Effective.mp3")
//Palkia Attacks Audio 

const SpacialRendAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/zxleqbbksw/Spacial%20Rend.mp3");
const dracoMeteorAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/suixdkkdnp/Draco%20Meteor%20part%202.mp3");
const thunderAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/hbxbekeqme/Thunder.mp3");
const hydroPumpAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/amtoihsobt/Hydro%20Pump.mp3");

//Arceus Attacks Audio

const OutrageAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/ymomvvsqfm/Outrage.mp3");
const extremeSpeedAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/skildcdkaa/Extreme%20Speed.mp3");
const earthquakeAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/jcjuqoeair/Earthquake.mp3");
const recoverAudio = new Audio("https://epsilon.vgmsite.com/soundtracks/pokemon-sfx-gen-4-attack-moves-dppl-hg-ss/ognsvhbaku/Recover.mp3");


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
    "moves":["Outrage","Shadow Claw","Earthquake", "Recover"],
    "buttonText": ["Fight", "Switch", "Medicine", "Escape"]
   },
};


// Game state 
let isFighting = false;
let isSwitchingPokemon = false;
let switchPokemonPressed = false;

//Setting Fighting State

fightbtn.onclick = function(){

  if(!isFighting && !isSwitchingPokemon){
   fight();

} else if(isSwitchingPokemon){
  
 switchToPalkia();

} else {

  spacialRend();
}
}

//Perform Attacks

switchbtn.onclick = function(){
  
  if(isFighting && !isSwitchingPokemon){
    dracoMeteor();
 
 }  else if (!isSwitchingPokemon){
   
  ( mytext.textContent = "Are you Switching Pokemon?");
   return isSwitchingPokemon= true;

 } else if(isSwitchingPokemon && !switchPokemonPressed) {

    switchPokeomn();
    return switchPokemonPressed = true;

 } else if (isSwitchingPokemon && switchPokemonPressed){
  switchToDialga();
  
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


// Update UI For Switch Pokemon Mode


function switchPokeomn(){

  mytext.textContent = `Palkia, come back!`;

  fightbtn.classList.add("fightButtonSwitched");
switchbtn.classList.add("switchButtonSwitched");
medicinebtn.classList.add("medicineButtonSwitched");
escapebtn.classList.add("escapeButtonSwitched");

fightbtn.innerText = "Palkia";
switchbtn.innerText = "Dialga";
medicinebtn.innerText = "Giratina";
escapebtn.innerText = "Arceus";

fightbtn.insertAdjacentHTML("beforebegin", `<img src = "Sprites/Palkia switch Icon.png" id="palkiaIcon"/>`);
switchbtn.insertAdjacentHTML("beforebegin",`<img src = "Sprites/dialga switch icon.png" id="palkiaIcon"/>`);
medicinebtn.insertAdjacentHTML("beforebegin",`<img src = "Sprites/giratina orgin Icon.png"" id="palkiaIcon"/>`);
medicinebtn.classList.add("medicineButtonSwitched");



 }


 // Switch to Different Pokemons 

// Switch To Palkia
 
function switchToPalkia(){

  mytext.textContent = `Palkia, come out!`;


}

function switchToDialga(){

  mytext.textContent = `Dialga, come out!`;


}

function switchToGiaratina(){

  mytext.textContent = `Giratina, come out!`;


}

function switchToArceus(){

  mytext.textContent = `Arceus, come out!`;


}




// Update UI to for Healing Pokemon

medicinebtn.onclick = function(){
  
  if(isFighting && !isSwitchingPokemon){
    hydroPump();
     
 } else if (isSwitchingPokemon)[
  heal()
 ]
 }



  // Different attacks  of Player Pokemon 

function spacialRend(){
  mytext.textContent = "Palkia Used " + availablePokemon.Palkia.moves[0];
  SpacialRendAudio.play();

  setTimeout(attackText, DELAY_SPECIAL_REND);
  setTimeout(calculateDamage, DELAY_TAKE_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(randomOpAttack, DELAY_OPPONENT_ATTACK);

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
 setTimeout(randomOpAttack, DELAY_OPPONENT_ATTACK);

  fightbtn.classList.add("fightButtonHidden");
  switchbtn.classList.add("switchButtonHidden");
  medicinebtn.classList.add("medicineButtonHidden");
  escapebtn.classList.add("escapeButtonHidden");

 }

 escapebtn.onclick = function(){
  
  if(isFighting && !isSwitchingPokemon){
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
 setTimeout(randomOpAttack, DELAY_OPPONENT_ATTACK);

  fightbtn.classList.add("fightButtonHidden");
  switchbtn.classList.add("switchButtonHidden");
  medicinebtn.classList.add("medicineButtonHidden");
  escapebtn.classList.add("escapeButtonHidden");
 
 }

 
 
 function hydroPump(){
  mytext.textContent = "Palkia Used " + availablePokemon.Palkia.moves[2];
 hydroPumpAudio.play();

  setTimeout(attackText, DELAY_DRACO_METEOR);
  setTimeout(calculateDamage, DELAY_THUNDER_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(randomOpAttack, DELAY_OPPONENT_ATTACK);

  fightbtn.classList.add("fightButtonHidden");
  switchbtn.classList.add("switchButtonHidden");
  medicinebtn.classList.add("medicineButtonHidden");
  escapebtn.classList.add("escapeButtonHidden");  
 }


 // Perform Damage Calculation And Display it 

 function calculateDamage(){
  hitWeak.play();
  healthP1.value -= Math.floor(Math.random() * (20 - 40) +40);
  healthBarP1.textContent = healthP1.value;
}

   function calculateOpDamage(){

    hitWeak.play();
    healthP2.value -= Math.floor(Math.random() * ( 20 - 40) + 40);
    healthBarP2.textContent = healthP2.value;

   }

   function calculateSuperEffOpDamage(){

    hitStrong.play();
    healthP2.value -= Math.floor(Math.random() * (20 - 50) + 50);
    healthBarP2.textContent = healthP2.value;

   }

  function healOpHealth(){

    healthP1.value = 100;
     healthBarP1.textContent = healthP1.value;

   }

// Display attack text

 function attackText() {
  
   mytext.textContent = "It's not Very Effective";
  
  }

  function opAttackText() {
  
    mytext.textContent = "It's not Very Effective";
   
  }

  function superEffOpAttackText() {
  
    mytext.textContent = "It's Super Effective";
   
  }

 function recoverHealthText(){

  mytext.textContent = "Arceus healed itself";
   
 }

  
 /* function damageText(){
    
    damageReceivedP1 = 100 - (healthP1.value)
    mytext.textContent = `Arceus Took ${damageReceivedP1} points of damage`; Να το εξετάσουμε
}*/ 


// Enemy Pokemon random attack

const opAttacks = ['outrage','outrage','shadow claw','shadow claw','earthquake','earthquake','recover'];

let randomAttack;

function randomOpAttack(){

  randomAttack = opAttacks[Math.floor(Math.random() * opAttacks.length)];
  if (randomAttack == 'outrage') {
    outrage();
   }
   if (randomAttack == 'shadow claw') {
    shadowClaw();
   }
   if (randomAttack == 'earthquake') {
    earthquake();
   }

   if (randomAttack == 'recover') {
    recover();
   }
  }

// Different attacks  of Enemy Pokemon 

function outrage(){
  mytext.textContent = `Arceus Used ${availablePokemon.Arceus.moves[0]}`;
  OutrageAudio.play();
  setTimeout(superEffOpAttackText, DELAY_OPPONENT_ATTACK);
  setTimeout(calculateSuperEffOpDamage, DELAY_TAKE_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);
   }
 
 function shadowClaw(){
  mytext.textContent =`Arceus Used ${availablePokemon.Arceus.moves[1]}`;
  //dracoMeteorAudio.play();
  setTimeout(attackText, DELAY_DRACO_METEOR);
  setTimeout(calculateOpDamage, DELAY_TAKE_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);

 }

  function earthquake(){
  mytext.textContent = `Arceus Used ${availablePokemon.Arceus.moves[2]}`;
  //thunderAudio.play();
  setTimeout(attackText, DELAY_DRACO_METEOR);
  setTimeout(calculateOpDamage, DELAY_THUNDER_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);

 }


 function recover(){
  mytext.textContent = `Arceus Used ${availablePokemon.Arceus.moves[3]}`;
  //hydroPumpAudio.play();
  setTimeout(recoverHealthText, DELAY_RECOVERY_TEXT);
  setTimeout(healOpHealth, DELAY_RECOVER);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);

 }
 

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










  

  

   
