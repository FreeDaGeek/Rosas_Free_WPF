   // Are you getting enough sleep?

var sleeping = prompt(" How many hours do you sleep per day?");
var fullDay = 24;
var wideAwake = sleeping - 24 ;

//your body can stay up twice as long as it is when at rest

//if wideAwake is less then sleeping time timed 2
if (wideAwake > sleeping * 2){
    console.log("You need to rest more!");}
//If equal to or more then sleeping timed 2
else{ console.log("Your well rested")
}

function enoughSleep (sleeping , wideAwake){
    var totalTimeSleeping = 24 - 16;
    return totalTimeSleeping
}

































//Gas milage problem
//var percentageOfTank=1; // reps the gas gauge
//var sizeOfTank=100;
/*var milesPerGallon=12;
var targetDistance = 200; //one piece of the puzzle

var gallonsOfGas = sizeOfTank*percentageOfTank;
var effectiveTravelDistance = gallonsOfGas*(milesPerGallon);

//encapsulate the effectveDistance code for out vehicle

if( targetDistance <= effectiveTravelDistance){ console.log( 'you can get there');

}else{ console.log('You cannot get there');}

function distanceCalulator(tanksize, mpg, percentageOfTank )
     {
         return tanksize* mpg *percentageOfTank;

     }

function effectiveDistance() //return string of whether of not a set distance can be travelled
    {
        var returnString = "";
        if(target<= etd){returnString="You can make it"}
        else{returnString = "You can\'t make it."}

        return returnString;

    }
console.log(distanceCalulator(20, 10, 1/2));
console.log(distanceCalulator(sizeOfTank, milesPerGallon, percentageOfTank));


var c0rF =prompt('C or F?'); //degree type selection
var temp =prompt("Temp to get from user");

function tempConvert(CF, t) {


if(
    CF.toUpperCase()=="C" // cal to fah
    ){
    return t* 9/5 + 32;
}
else{
    return (t-32)*5/9;
}
}
console.log(tempConvert(c0rF,temp));
console.log(prompt("C of F"), ("Temp to get from user") );




function calculate() {
    var radius=prompt("Please enter the size of the radius","");
    var pi=3.14159265359;  // estimated to 11 decimal places
    var circ=2*pi*radius;
    var d=prompt("The circumference of a circle with radius "+radius+" is "+circ+".")
}
*/