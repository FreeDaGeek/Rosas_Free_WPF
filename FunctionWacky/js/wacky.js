//Halloween
var sweetTreat = prompt("How much halloween candy did you eat for the day?"); //variable sweetTreat
var  enoughCandy= 15 + "pieces"; //enoughCandy variable

//No parameters are used and the function works entirely with global variables.


var totalAmount = function Water(){ //variable totalamount function
    var totalMath = enoughCandy - sweetTreat; //variable total math
    return totalMath; //return totalmath
} 

var Candy = totalAmount(); //variable Candy

!(sweetTreat > enoughCandy ) ? console.log("No need to over do it, you have enough today.") : console.log("I don't see why you can have a few more");
// ternary

