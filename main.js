/*
JavascriptCalculator
- - - - - - - - - -
http://codepen.io/DizNicolasAmor/pen/mRadjZ
Author:  Diz, Nicolás Amor (https://github.com/DizNicolasAmor)
This project is a challenge posed by FreeCodeCamp.
*/


var screen = ""; 
var screenValue = 0;  

//we will use these booleans in the respective operations
var addBoolean = false; 
var subBoolean = false;
var mulBoolean = false;
var divBoolean = false;

var operation = false;   //this boolean asks if there is a current operation
var doOperation = true;   //you are allowed to do an operation
                        //if you are in a current operation --> doOperation=false;
var finishOperation = false;    //after an operation --> true; look screenWrite()
var coma = true;


//helper function
function resetOperators() {
  addBoolean = false;
  subBoolean = false;
  mulBoolean = false;
  divBoolean = false;
  finishOperation = false;
}

//the clear buttons
function reset() {
  screenValue = 0;
  screen = "";
  operation = false;
  doOperation = true;
  coma = true;
  finishOperation = false;
  resetOperators();
  document.getElementById("display").value="0";
}

//add and show numbers in the screen
function screenWrite(num)   {
  if (screen.length < 8) {    //screen cannot have more than 8 digits. 
    doOperation = true;
    document.getElementById("display").value=screen+num;
    screen = document.getElementById("display").value;
  }
  
  /// If you finished an operation and now you press a number, the screen is cleaned 
  if (finishOperation) {
    screenValue = parseFloat(document.getElementById("display").value);
  }
  
  if (num != 0) { 
    coma = true;
    finishOperation = false;
  }
}

function process() {     //hacer las operaciones que procedan
  
  if (operation == false) {   //Punto de inicio para evitar errores en la primera operación
    screenValue = parseFloat(document.getElementById("display").value);
    operation = true;
    
  } else {
    if(addBoolean) {
      screenValue = screenValue + parseFloat(screen);
      //only print eight char in screen. 
      screen = screenValue.toString().substring(0,9);
      screenValue = parseFloat(screen); 

    } else if (subBoolean) {
      screenValue = screenValue - parseFloat(screen);
      //only print eight char in screen. 
      screen = screenValue.toString().substring(0,9);
      screenValue = parseFloat(screen); 

    } else if (mulBoolean) {
      screenValue = screenValue * parseFloat(screen);
      //only print eight char in screen. 
      screen = screenValue.toString().substring(0,9);
      screenValue = parseFloat(screen); 
      
    } else if (divBoolean) {
      screenValue = screenValue / parseFloat(screen);
      //only print eight char in screen. 
      screen = screenValue.toString().substring(0,9);
      screenValue = parseFloat(screen); 

    }
    resetOperators();
  }
  finishOperation = false;
  screen = "";      //now you can add the next num
  doOperation = false;  //after an operation, if clickOn number --> reset; 
                    //else if clickOn operation --> do the operation
  document.getElementById("display").value=screenValue;     
  coma = false;
}

function add()  {
  if (doOperation) {
    process();
  }else {
    resetOperators();
  }
  addBoolean = true;
}

function sub() {
  if (doOperation) {
    process();
  }else {
    resetOperators();
  }
  subBoolean = true;
}

function mul() {
  if (doOperation) {
    process();
  }else{
    resetOperators();
  }
  mulBoolean = true;
}

function div() {
  if (doOperation) {
    process();
  }else{
    resetOperators();
  }
  divBoolean = true;
}


function decimal() {
  if (screen.indexOf(".") == -1 ) {
    screen = document.getElementById("display").value + ".";
    document.getElementById("display").value = screen;
    if (coma == false || finishOperation){
      screen = "0.";
      document.getElementById("display").value = screen;
    }
  }}

function result() {
  if (doOperation) {
    process(); }
  else { 
    document.getElementById("display").value = screenValue; 
  }
  resetOperators();
  finishOperation = true;
}
