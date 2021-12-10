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
    privat: false,
    rememberMyFilms() {
        let movie,
            rating;
        for (let i = 0; i < 2; i++) {

            do {
                movie = prompt('Один из последних просмотренных фильмов?', '');
            } while (movie == '' || movie == null || movie.length > 50);

            do {
                rating = prompt('На сколько оцените его', '');
            } while (rating == '' || rating == null);

            this.movies[movie] = rating;
        }
    },
    detectPersonalLevel() {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            do {
                this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            } while (this.genres[i] == '' || this.genres[i] == null);
        }
        this.genres.forEach(function(item, i, arr) {
            console.log("Любимый жанр #" + (i+1) + " - это " + item );
          });
    },
    showMyDB() {
        if (!this.privat) {
            console.log(this);
        }
    },
    toggleVisibleMyDB() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();


/*
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
} */
/*
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
}*/
/* function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
} */

/* function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
} */




