

//Ternary Operator
var payFull = 100;
(payFull < 100) ? console.log ("We aren't done yet") :  console.log ("You are good to go");

///////Regular Conditional Below

if (payFull < 100){
    console.log( "Client owes me money");
}else{
    console.log("Client has paid in full");
}
/////////////CAL


var maxCal= 600;
var mealCal=800;
var halfMeal=500;

//If mealCal greater then maxCal

if(mealCal >  maxCal){
    //the meal is more them my max amount of calories
    console.log("No thanks, I'll have a salad.");
}else if(mealCal <= halfMeal);{
    //If I can split the mealCal with a friend
    console.log("I can eat it, If I share it!");
}
