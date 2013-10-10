//Personal Expressions
//Fridelande Rosas  Date: 10/10/13


var moviesRent;
moviesRent = ["2", "1", "3", "1"]; //movies rented weekly for a month
console.log(moviesRent);

var totalMovies;
totalMovies = [moviesRent[0] + moviesRent[1] + moviesRent[2] + moviesRent[3];
console.log( totalMovies);

var moviePrice;
moviePrice = "1";

console.log(moviePrice * totalMovies); //total amount spent for 5 wks
// I changed this to be a reference to the length of the array.
console.log(totalMovies/moviesRent.length); //average
