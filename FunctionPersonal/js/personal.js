/**
 * Created by Frosas32 on 10/24/13.
 */
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
