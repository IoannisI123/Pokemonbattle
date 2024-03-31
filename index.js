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
const myPokemom = document.getElementById("myPokemon");
let damageReceivedP1;
let disableButtons = document.getElementsByClassName("buttons").disabled = true;
let isFighting = false;
let isSwitchingPokemon = false;
let switchPokemonPressed = false;

//Sound effects Audio(Dom)

const hitWeak = new Audio("https://static.wikia.nocookie.net/soundeffects/images/5/50/Hit_Weak_Not_Very_Effective.mp3");
const hitStrong = new Audio("https://static.wikia.nocookie.net/soundeffects/images/c/c2/Hit_Super_Effective.mp3");

// Available Pokemon

const availablePokemon = {
  
  "Palkia":{
    "moves":["Spacial Rend","Draco Meteor","Hydro Pump", "Thunder"],
    "buttonText": ["Fight", "Switch", "Medicine", "Escape"],
     isFighting :true,
   },
  
   "Dialga":{
    "moves":["Flash Canon","Aura Sphere","Earth Power", "Dragon Pulse"],
    "buttonText": ["Fight", "Switch", "Medicine", "Escape"],
    isFighting :false,
   },

   "Giratina":{
    "moves":["Shadow Force","Outrage","Shadow Sneak", "Wi-o-Wisp"],
    "buttonText": ["Fight", "Switch", "Medicine", "Escape"],
    isFighting :false,
   },

   "Arceus":{
    "moves":["Outrage","Shadow Claw","Earthquake", "Recover"],
    "buttonText": ["Fight", "Switch", "Medicine", "Escape"],
    isFighting :false,
   },
};


// Game state 

let isPalkiaFighting = true;
let isDialgaFighting = false;
let isGiratinafighting = false;
let isArceusFighting = false;

//Setting Fighting State

fightbtn.onclick = function(){


  if(!isFighting && !isSwitchingPokemon && !switchPokemonPressed){
   fight();

} else if(isSwitchingPokemon && switchPokemonPressed && !isPalkiaFighting){
  
 switchToPalkia();

} else if(isSwitchingPokemon && switchPokemonPressed&& isPalkiaFighting) {

  mytext.textContent = "You can't switch to that."

} else if (isFighting && !isSwitchingPokemon && !switchPokemonPressed) {
  spacialRend();
}
}

//Perform Attacks & Switch Pokemon

switchbtn.onclick = function(){
  
  if(isFighting && !isSwitchingPokemon){
    dracoMeteor();
 
 }  else if (!isSwitchingPokemon){
   
  mytext.textContent = "Are you Switching Pokemon?";
   isSwitchingPokemon = true;

 } else if(isSwitchingPokemon && !switchPokemonPressed) {

    switchPokeomn();
     switchPokemonPressed = true;

 } else if (isSwitchingPokemon && switchPokemonPressed && !isDialgaFighting){
    switchToDialga();
   

 } else if (isSwitchingPokemon && switchPokemonPressed && isDialgaFighting){
  mytext.textContent = "You can't switch to that";
 }
 }
 

// Update UI for fight mode

function fight(){
   
  isFighting = true;
fightbtn.classList.add("fightButtonPressed");
switchbtn.classList.add("switchButtonPressed");
medicinebtn.classList.add("medicineButtonPressed");
escapebtn.classList.add("escapeButtonPressed");

fightbtn.innerText = availablePokemon.Palkia.moves[0];
switchbtn.innerText = availablePokemon.Palkia.moves[1];
medicinebtn.innerText = availablePokemon.Palkia.moves[2];
escapebtn.innerText =availablePokemon.Palkia.moves[3]


}


// Update UI For Switch Pokemon Mode


function switchPokeomn(){

  mytext.textContent = `Palkia, come back!`;
  isFighting = false;
  
  fightbtn.classList.add("fightButtonSwitched");
switchbtn.classList.add("switchButtonSwitched");
medicinebtn.classList.add("medicineButtonSwitched");
escapebtn.classList.add("escapeButtonSwitched");

fightbtn.innerText = "Palkia";
switchbtn.innerText = "Dialga";
medicinebtn.innerText = "Giratina";
escapebtn.innerText = "Arceus";

myPokemom.classList.add("myPokemonImg");
  
}

 // Switch to Different Pokemons 
 
function switchToPalkia(){

  mytext.textContent = "Palkia, come out!";
  myPokemom.src = 'Sprites/palkia Back.gif';
  myPokemom.classList.remove("myPokemonImg");

  isPalkiaFighting = true;
  isDialgaFighting = false;
  isGiratinafighting = false;
  isArceusFighting = false;

  /* isFighting = false;
  isSwitchingPokemon = false;
  switchPokemonPressed = false; */
  randomOpAttack();
}

function switchToDialga(){
  
  myPokemom.src = 'Sprites/dialga back.gif';
  mytext.textContent = "Dialga, come out!";
  myPokemom.classList.remove("myPokemonImg");


   isDialgaFighting = true;
   isPalkiaFighting = false;
  isGiratinafighting = false;
  isArceusFighting = false;
    isSwitchingPokemon = false;
    switchPokemonPressed = false;
  
  
  randomOpAttack();
  
   
}

function switchToGiaratina(){

  mytext.textContent = `Giratina, come out!`;
  
  myPokemom.src = 'Sprites/giratina-origin back.gif';
  myPokemom.classList.remove("myPokemonImg");


   isDialgaFighting = false;
   isPalkiaFighting = false;
  isGiratinafighting = true;
  isArceusFighting = false;
    isSwitchingPokemon = false;
    switchPokemonPressed = false;
  
  
  randomOpAttack();

}

function switchToArceus(){

  mytext.textContent = `Arceus, come out!`;
   
  myPokemom.src = 'Sprites/arceus back.gif';
  myPokemom.classList.remove("myPokemonImg");


   isDialgaFighting = false;
   isPalkiaFighting = false;
  isGiratinafighting = false;
  isArceusFighting = true;
    isSwitchingPokemon = false;
    switchPokemonPressed = false;
  
  
  randomOpAttack();
}




// Update UI to for Healing Pokemon

medicinebtn.onclick = function(){
  
  if(isFighting && !isSwitchingPokemon){
    hydroPump();
     
     }  else if (!isSwitchingPokemon){
       
      mytext.textContent = "Are you Switching Pokemon?";
       return isSwitchingPokemon= true;
    
     } else if(isSwitchingPokemon && !switchPokemonPressed) {
    
        switchPokeomn();
        return switchPokemonPressed = true;
    
     } else if (isSwitchingPokemon && switchPokemonPressed && !isDialgaFighting){
        switchToGiaratina();
      
     } else if (isSwitchingPokemon && switchPokemonPressed && isGiratinafighting){
      mytext.textContent = "You can't switch to that";
     }
     }



  // Different attacks  of Player Pokemon 

function spacialRend(){
   isFighting = false;
  mytext.textContent = "Palkia Used " + availablePokemon.Palkia.moves[0];

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
 
 } else if(!isFighting && isSwitchingPokemon && switchPokemonPressed)[
  switchToArceus()
 ]
 }
 
 function thunder(){
  mytext.textContent = "Palkia Used " + availablePokemon.Palkia.moves[3];
 

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
  setTimeout(superEffOpAttackText, DELAY_OPPONENT_ATTACK);
  setTimeout(calculateSuperEffOpDamage, DELAY_TAKE_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);
   }
 
 function shadowClaw(){
  mytext.textContent =`Arceus Used ${availablePokemon.Arceus.moves[1]}`;
  
  setTimeout(attackText, DELAY_DRACO_METEOR);
  setTimeout(calculateOpDamage, DELAY_TAKE_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);

 }

  function earthquake(){
  mytext.textContent = `Arceus Used ${availablePokemon.Arceus.moves[2]}`;
  
  setTimeout(attackText, DELAY_DRACO_METEOR);
  setTimeout(calculateOpDamage, DELAY_THUNDER_DAMAGE);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);

 }


 function recover(){
  mytext.textContent = `Arceus Used ${availablePokemon.Arceus.moves[3]}`;
  
  setTimeout(recoverHealthText, DELAY_RECOVERY_TEXT);
  setTimeout(healOpHealth, DELAY_RECOVER);
 // setTimeout(damageText, 4800);
  setTimeout(resetTextAndButtons, DELAY_RESET_TEXT);

 }
 

 // Reset text and buttons to out Of Fight Mode

   function resetTextAndButtons() {
    mytext.textContent = "What Will You Do?";
   isFighting = false;
   isSwitchingPokemon=false;
   switchPokemonPressed = false;
  fightbtn.innerText = availablePokemon.Palkia.buttonText[0];
  switchbtn.innerText = availablePokemon.Palkia.buttonText[1];
  medicinebtn.innerText = availablePokemon.Palkia.buttonText[2];
  escapebtn.innerText = availablePokemon.Palkia.buttonText[3];

  fightbtn.classList.remove("fightButtonPressed", "fightButtonHidden","fightButtonSwitched");
  switchbtn.classList.remove("switchButtonPressed" , "switchButtonHidden","switchButtonSwitched");
  medicinebtn.classList.remove("medicineButtonPressed" , "medicineButtonHidden", "medicineButtonSwitched");
  escapebtn.classList.remove("escapeButtonPressed", "escapeButtonHidden", "escapeButtonSwitched" );


  }










  

  

   
