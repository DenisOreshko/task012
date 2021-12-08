(function () {
    "use strict";
}());

let numberOfFilms;
do {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
} while (numberOfFilms == '' || numberOfFilms == null);


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movie,
    rating;
    
for (let i = 0; i < 2; i++) {

    do {
        movie = prompt('Один из последних просмотренных фильмов?', '');
    } while (movie == '' || movie == null || movie.length > 50);

    do {
        rating = prompt('На сколько оцените его', '');
    } while (rating == '' || rating == null);

    personalMovieDB.movies[movie] = rating;
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
