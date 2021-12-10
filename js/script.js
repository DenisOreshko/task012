(function () {
    "use strict";
}());

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        do {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        } while (this.count == '' || this.count == null || isNaN(this.count));
    },
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
        this.genres.forEach(function (item, i, arr) {
            console.log("Любимый жанр #" + (i + 1) + " - это " + item);
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

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
