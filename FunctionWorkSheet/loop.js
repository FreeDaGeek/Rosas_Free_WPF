/**
 * Created by Frosas32 on 10/19/13.
 */
console.log('-----Loops-----');
var b = 10 //setup the index
while (b > 0) { // checks the condition
    console.log(b);
    b--; //increments or decrements the index
}
//While Loop ^^^^
console.log('----Do While Loops-----');
var c = 10;
do {
    console.log(c + ' kegs on the wall');
    c--;
}
while (c > 1);
//Functions
var width = 5;

function calArea() {
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}
console.log(width);
calArea();