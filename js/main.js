const typehere = document.getElementById("typehere");

function appendToDisplay(input){
    typehere.value +=input;
}

function clearDisplay(){
typehere.value="";
}

function calculate(){
    try{  
         typehere.value= eval(typehere.value);
}
catch(error){
typehere.value ="Error";
}
}
