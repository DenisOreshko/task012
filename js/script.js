(function () {
    "use strict";
}());

let numberOfFilms;

function start() {
    do {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movie,
    rating;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        do {
            movie = prompt('Один из последних просмотренных фильмов?', '');
        } while (movie == '' || movie == null || movie.length > 50);

        do {
            rating = prompt('На сколько оцените его', '');
        } while (rating == '' || rating == null);

        personalMovieDB.movies[movie] = rating;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }    
}

detectPersonalLevel();

function showMyDB(){
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
}

writeYourGenres();
showMyDB();