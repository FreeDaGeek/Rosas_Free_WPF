//Over/Under Eating
//Should I eat this meal?
var maxCal= 600;
var mealCal=800;

if(mealCal >= maxCal){
    console.log("No thanks, I'll have a salad.");
}else if( mealCal /2 < 500 ){
    //If I can save the other have if less then 500 cal
    console.log("I can eat some now and save for later.");}

else{
    console.log("This meal works for me!");
}