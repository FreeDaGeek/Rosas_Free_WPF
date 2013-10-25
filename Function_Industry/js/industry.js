/**
 * Created by Frosas32 on 10/25/13.
 */
//I couldn't think of an industry so I used one that Im in now.


//Natural Hair Retention
var names = new Array(); //variable array names
names[0] = "Maleeyah"; //index 0 string
names[1] = "Melissa"; //index 1  string
names[2] = "Sara"; //index 2  string

var hairLength = prompt("How long did your hair grow this year?"); //variable hairLength prompt
var hairGrowth = 3 + "Inches"; //variable Potential Hair Growth
var hairCuts = prompt("How much did you cut of this year?"); //variable hairCuts prompt


function hair(){ //function hair
    console.log("Great job retaining length!"); //console.log for the function
}

var lengthLost = function(){ //function length lost
    var remain = hairCuts - hairGrowth; // remain variable
    console.log( " might need to focus on taking better care of" + remain + "hair"); //console.log printout
    return remain; //return to lengthLost the remain variable
}

if ((hairLength >= hairGrowth) || (hairCuts < hairGrowth)){ //if statement
    hair(); //hair function called out
}
else if  (hairLength < hairGrowth){ //else if
    lengthLost(); //function lengthLost called out
}


