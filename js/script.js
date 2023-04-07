const numberOfFilms = promt("Сколько фильмов уже посмотрели?", 0);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
