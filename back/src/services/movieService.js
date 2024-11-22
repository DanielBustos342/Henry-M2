const Movie = require("../models/Movie");
// consultar a una base de datos BDD
// Realizar una solicitud a un servicio externo
// Leer informacion de un archivo

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },
  getMovieById: async (id) => {
    const movie = await Movie.findById(id);
    return movie;
  },

  findMovieByName: async (title) => {
    const movie = await Movie.findOne({ title });
    return movie;
  },
  createMovie: async (movie) => {
    const newMovie = await Movie.create(movie);
    return newMovie;
  },
};
