//Over/Under Eating
//Should I eat this meal?
var maxCal= 600;
var mealCal= prompt("How many calories is this meal?");

//If mealCal amount greater then of equal to the maxCal
if(mealCal >= maxCal){
    console.log("No thanks, I'll have a salad.");
    //if the amount of mealCal if maxed, split the meal into 2 if its less then 500
}else if( mealCal /2 < 500 ){
    console.log("I can eat some now and save for later.");}
    //the mealCal was less then the max and not equal to
else{
    console.log("This meal works for me!");
}

