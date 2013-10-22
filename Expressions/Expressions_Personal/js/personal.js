//Personal Expressions
//Fridelande Rosas  Date: 10/10/13


var moviesRent = [2, 1, 4, 1]; //movies rented weekly for a month
console.log(moviesRent);

var totalMovies = moviesRent[0] + moviesRent[1] + moviesRent[2] + moviesRent[3];
console.log( totalMovies);

var moviePrice;
moviePrice = 2;

console.log(moviePrice * totalMovies); //total amount spent for the month
console.log(totalMovies/moviesRent.length); //average amount of movies in a month
