const numberOfFilms = prompt("Сколько фильмов уже посмотрели?", 0);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const oneLastWatchFilm = prompt("Один из последних просмотренных фильмов?", "");

const markOfFilm = prompt("На сколько оцените его?", "");

personalMovieDB.movies[oneLastWatchFilm] = markOfFilm;

console.log(personalMovieDB);
