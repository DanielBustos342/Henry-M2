const Movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    // consultar a una base de datos BDD
    // Realizar una solicitud a un servicio externo
    // Leer informacion de un archivo
    const movies = await Movie.find();

    return movies;
  },
};
