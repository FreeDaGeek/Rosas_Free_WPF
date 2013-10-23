//Gas milage problem
var percentageOfTank=1; // reps the gas gauge
var sizeOfTank=100;
var milesPerGallon=12;
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















//Circumference
//var radius = 6;
//var pi = 3.14;
//var power = 2;

//function circumference(radius, pi, power)
//{

//    return circumference radius* pi *power;
//}

//console.log(circumference(6, 3.14, 2));