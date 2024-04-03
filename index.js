// Constants
const DELAY_SPECIAL_REND = 3800;
const DELAY_DRACO_METEOR = 3800;
const DELAY_RECOVER = 2200;
const DELAY_RECOVERY_TEXT = 3800;
const DELAY_THUNDER_DAMAGE = 2200;
const DELAY_TAKE_DAMAGE = 2800;
const DELAY_OP_ATTACK_ONSWITCH = 1300;
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
let currentPokemon = "Palkia";

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

const availableAttacks = {
  
  
    "moves":["Spacial Rend","Draco Meteor","Hydro Pump", "Thunder",
           "Flash Canon","Aura Sphere","Earth Power", "Dragon Pulse",
           "Shadow Force","Outrage","Shadow Sneak", "Wi-o-Wisp",
           "Shadow Claw","Earthquake", "Recover"]
    

}

// Game state 

let CurrentPokemonMoves = [availablePokemon.Palkia.moves[0],availablePokemon.Palkia.moves[1],availablePokemon.Palkia.moves[2],availablePokemon.Palkia.moves[3]];


let isPalkiaFighting = true;
let isDialgaFighting = false;
let isGiratinaFighting = false;
let isArceusFighting = false;


// Update UI for fight mode

function fight(){
   
  isFighting = true;
 
  fightButtonsInit();
  pokemonMovesInit();
}

function hideFightButtons(){

  fightbtn.classList.add("buttonHidden");
  switchbtn.classList.add("buttonHidden");
  medicinebtn.classList.add("buttonHidden");
  escapebtn.classList.add("buttonHidden");
}

function fightButtonsInit(){
  fightbtn.classList.add("fightButtonPressed");
  switchbtn.classList.add("switchButtonPressed");
  medicinebtn.classList.add("medicineButtonPressed");
  escapebtn.classList.add("escapeButtonPressed");
    }

    function buttonsSwitched() {

      fightbtn.classList.add("fightButtonSwitched");
   switchbtn.classList.add("switchButtonSwitched");
   medicinebtn.classList.add("medicineButtonSwitched");
   escapebtn.classList.add("escapeButtonSwitched");
      }

function resetFightButtons(){
  
  fightbtn.classList.remove("fightButtonPressed", "buttonHidden","fightButtonSwitched");
  switchbtn.classList.remove("switchButtonPressed" , "buttonHidden","switchButtonSwitched");
  medicinebtn.classList.remove("medicineButtonPressed" , "buttonHidden", "medicineButtonSwitched");
  escapebtn.classList.remove("escapeButtonPressed", "buttonHidden", "escapeButtonSwitched" );
}

   function pokemonMovesInit(){ 
    
    switch(true){

      case(isPalkiaFighting):
    fightbtn.innerText =  availablePokemon.Palkia.moves[0];
switchbtn.innerText = availablePokemon.Palkia.moves[1];
medicinebtn.innerText = availablePokemon.Palkia.moves[2];
escapebtn.innerText = availablePokemon.Palkia.moves[3];
break;

case(isDialgaFighting):
fightbtn.innerText = availablePokemon.Dialga.moves[0];
switchbtn.innerText = availablePokemon.Dialga.moves[1];
medicinebtn.innerText = availablePokemon.Dialga.moves[2];
escapebtn.innerText = availablePokemon.Dialga.moves[3];
break;

case(isGiratinaFighting):
fightbtn.innerText = availablePokemon.Giratina.moves[0];
switchbtn.innerText = availablePokemon.Giratina.moves[1];
medicinebtn.innerText = availablePokemon.Giratina.moves[2];
escapebtn.innerText = availablePokemon.Giratina.moves[3];
break;

case(isArceusFighting):
fightbtn.innerText = availablePokemon.Arceus.moves[0];
switchbtn.innerText = availablePokemon.Arceus.moves[1];
medicinebtn.innerText = availablePokemon.Arceus.moves[2];
escapebtn.innerText = availablePokemon.Arceus.moves[3];
break;
}
   }
  
  function switchPokemonButtonName(){
fightbtn.innerText = "Palkia";
switchbtn.innerText = "Dialga";
medicinebtn.innerText = "Giratina";
escapebtn.innerText = "Arceus";
  }

// Update UI For Switch Pokemon

function switchPokeomn(){

  mytext.textContent = `${currentPokemon}, come back!`;
  isFighting = false;

  buttonsSwitched();
  switchPokemonButtonName();
}

//Setting Fighting State & Pokemon Switching

fightbtn.onclick = function(){

   switch(true){

case(!isFighting && !isSwitchingPokemon && !switchPokemonPressed):

fight();
break;

case (isFighting && !isSwitchingPokemon && !switchPokemonPressed && isPalkiaFighting):
  
useAttack("Spacial Rend");
  break;

  case (isFighting && !isSwitchingPokemon && !switchPokemonPressed && isDialgaFighting):
    useAttack("FlashCanon");
    break;

    case (isFighting && !isSwitchingPokemon && !switchPokemonPressed && isGiratinaFighting):
      useAttack("Shadow Force");
      break;

      case (isFighting && !isSwitchingPokemon && !switchPokemonPressed && isArceusFighting):
        useAttack("Outrage");
        break;

 case (isSwitchingPokemon && switchPokemonPressed && !isPalkiaFighting):
  
 switchToPalkia();
 break;

case (isSwitchingPokemon && switchPokemonPressed&& isPalkiaFighting):

  mytext.textContent = "You can't switch to that."
  break;

}
  }

//Perform Attacks & Switch Pokemon

switchbtn.onclick = function(){

  switch(true) {
  
  case (isFighting && !isSwitchingPokemon && isPalkiaFighting):
    useAttack("Draco Meteor");
    break;

    case (isFighting && !isSwitchingPokemon && isDialgaFighting):
    useAttack("auraSphere");
    break;

    case (isFighting && !isSwitchingPokemon && isGiratinaFighting):
    useAttack("outrage");
    break;

    case (isFighting && !isSwitchingPokemon && isArceusFighting):
    useAttack("Shadow Claw");
    break;
 
   case(!isSwitchingPokemon):
   
  mytext.textContent = "Are you Switching Pokemon?";
   isSwitchingPokemon = true;
   break;

 case (isSwitchingPokemon && !switchPokemonPressed):

    switchPokeomn();
     switchPokemonPressed = true;
     break;

 case (isSwitchingPokemon && switchPokemonPressed && !isDialgaFighting):
    switchToDialga();
   break;

 case (isSwitchingPokemon && switchPokemonPressed && isDialgaFighting):
  mytext.textContent = "You can't switch to that";
  break;
 }
 }

// Perform Attacks - Heal And Switch Pokemon 

medicinebtn.onclick = function(){
  
   switch(true){

  case(isFighting && !isSwitchingPokemon && isPalkiaFighting):
    useAttack("Hydro Pump");
    break;
     
    case(isFighting && !isSwitchingPokemon && isDialgaFighting):
    useAttack("Earth Power");
     break;

     case(isFighting && !isSwitchingPokemon && isGiratinaFighting):
     useAttack("Shadow Sneak");
      break;

      case(isFighting && !isSwitchingPokemon && isArceusFighting):
      useAttack("Earthquake");
       break;
  
 

    case (isSwitchingPokemon && switchPokemonPressed && !isGiratinaFighting):
        switchToGiaratina();
        break;
      
      case(isSwitchingPokemon && switchPokemonPressed && isGiratinaFighting):
      mytext.textContent = "You can't switch to that";
       break;

    case(!isFighting):

   heal();
   break;
    }
     }

// Escae and last pokemon Attack 

escapebtn.onclick = function(){
  switch(true){
  case(isFighting && !isSwitchingPokemon &isPalkiaFighting):
    useAttack("Thunder");
    break;

 case(!isFighting && isSwitchingPokemon && switchPokemonPressed):
  switchToArceus()
  break;

  case(isFighting && !isSwitchingPokemon && !switchPokemonPressed && isPalkiaFighting):
  useAttack("Thunder");
  break;

  case(isFighting && !isSwitchingPokemon && !switchPokemonPressed && isDialgaFighting):
  useAttack("Dragon Pulse");
  break;

  case(isFighting && !isSwitchingPokemon && !switchPokemonPressed && isGiratinaFighting):
  useAttack("Thunder");
  break;

  case(isFighting && !isSwitchingPokemon && !switchPokemonPressed && isArceusFighting):
  useAttack("Recover");
  break;
  }
}



 // Switch to Different Pokemons 
 
function switchToPalkia(){

  mytext.textContent = "Palkia, come out!";
  myPokemom.src = 'Sprites/palkia Back.gif';
 
  
   currentPokemon = "Palkia";
  isPalkiaFighting = true;
  isDialgaFighting = false;
  isGiratinaFighting = false;
  isArceusFighting = false;

  /* isFighting = false;
  isSwitchingPokemon = false;
  switchPokemonPressed = false; */
  hideFightButtons();
  setTimeout(randomOpAttack,DELAY_OP_ATTACK_ONSWITCH); 
}

function switchToDialga(){

  currentPokemon = 'Dialga';
  myPokemom.src = 'Sprites/dialga back.gif';
  mytext.textContent = `${currentPokemon}, come out!`;
 
   
   isDialgaFighting = true;
   isPalkiaFighting = false;
  isGiratinaFighting = false;
  isArceusFighting = false;
    isSwitchingPokemon = false;
    switchPokemonPressed = false;
  
    hideFightButtons();
  setTimeout(randomOpAttack,DELAY_OP_ATTACK_ONSWITCH);  
}

function switchToGiaratina(){

  currentPokemon = 'Giratina';
  mytext.textContent = `${currentPokemon}, come out!`;
  
  myPokemom.src = 'Sprites/giratina-origin back.gif';
  
   currentPokemon="Giratina";
   isDialgaFighting = false;
   isPalkiaFighting = false;
  isGiratinaFighting = true;
  isArceusFighting = false;
    isSwitchingPokemon = false;
    switchPokemonPressed = false;
  
    hideFightButtons();
  randomOpAttack();
}

function switchToArceus(){

  mytext.textContent = `Arceus, come out!`;
   currentPokemon = "Arceus";
  myPokemom.src = 'Sprites/arceus back.gif';
  
   isDialgaFighting = false;
   isPalkiaFighting = false;
  isGiratinaFighting = false;
  isArceusFighting = true;
    isSwitchingPokemon = false;
    switchPokemonPressed = false;

    hideFightButtons();
  randomOpAttack();
}

  // Different attacks  of Player Default Pokemon 


  function useAttack(moveName) {
    const pokemonName = currentPokemon; // Set your desired Pokémon here
    const pokemon = pokemonName;
    if (!pokemon) {
      console.error("Pokemon not found");
      return;
    }
  
    const move = availableAttacks.moves.find(move => move === moveName);
    if (!move) {
      console.error("Move not found");
      return;
    }
    
    mytext.textContent = `${currentPokemon} Used ${moveName}`;
    
    let delay;
    switch(moveName) {
      case "Spacial Rend":
        delay = DELAY_SPECIAL_REND;
        delay = DELAY_TAKE_DAMAGE;
        delay = DELAY_OPPONENT_ATTACK;
        break;
      case "Draco Meteor":
        delay = DELAY_DRACO_METEOR;
        delay = DELAY_TAKE_DAMAGE;
        delay = DELAY_OPPONENT_ATTACK;
        break;
      case "Hydro Pump":
        delay = DELAY_SPACIAL_REND;
        delay = DELAY_TAKE_DAMAGE;
        delay = DELAY_OPPONENT_ATTACK;
        break;
      case "Thunder":
        delay = DELAY_SPECIAL_REND;
        delay = DELAY_TAKE_DAMAGE;
        delay = DELAY_OPPONENT_ATTACK;
        break;
      default:
        console.error("Invalid move");
        return;
    }
    
    //setTimeout(attackText, delay);
    setTimeout(calculateDamage, DELAY_TAKE_DAMAGE);
    setTimeout(randomOpAttack, DELAY_OPPONENT_ATTACK);
    hideFightButtons();
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



// I NEED TO MAKE THIS INTO A SINGLE FUNCTION LIKE useAttack function 


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

   switch(true){

    case(isPalkiaFighting):

  fightbtn.innerText = availablePokemon.Palkia.buttonText[0];
  switchbtn.innerText = availablePokemon.Palkia.buttonText[1];
  medicinebtn.innerText = availablePokemon.Palkia.buttonText[2];
  escapebtn.innerText = availablePokemon.Palkia.buttonText[3];
  break;

  case(isDialgaFighting):

  fightbtn.innerText = availablePokemon.Dialga.buttonText[0];
  switchbtn.innerText = availablePokemon.Dialga.buttonText[1];
  medicinebtn.innerText = availablePokemon.Dialga.buttonText[2];
  escapebtn.innerText = availablePokemon.Dialga.buttonText[3];
  break;

  case(isGiratinaFighting):

  fightbtn.innerText = availablePokemon.Giratina.buttonText[0];
  switchbtn.innerText = availablePokemon.Giratina.buttonText[1];
  medicinebtn.innerText = availablePokemon.Giratina.buttonText[2];
  escapebtn.innerText = availablePokemon.Giratina.buttonText[3];
  break;

  case(isArceusFighting):

  fightbtn.innerText = availablePokemon.Arceus.buttonText[0];
  switchbtn.innerText = availablePokemon.Arceus.buttonText[1];
  medicinebtn.innerText = availablePokemon.Arceus.buttonText[2];
  escapebtn.innerText = availablePokemon.Arceus.buttonText[3];
   break;
   }

   resetFightButtons();


  }










  

  

   
