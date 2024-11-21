const { json } = require("express");
const movieService = require("../services/movieService");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await movieService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res
        .status(500)
        .json({ error: "error interto de servidor" + error.message });
    }
  },

  getMovieById: async (req, res) => {
    const { id } = req.params;
    try {
      const movie = await movieService.getMovieById(id);
      res.status(200).json(movie);
    } catch (error) {
      res
        .status(500)
        .json({ error: "error interto de servidor" + error.message });
    }
  },

  getMovieByName: async (req, res) => {
    const { title } = req.body;
    try {
      const movie = await movieService.findMovieByName(title);
      res.status(200).json(movie);
    } catch (error) {
      res
        .status(500)
        .json({ error: "error interto de servidor" + error.message });
    }
  },

  createMovie: async (req, res) => {
    const { title, year, director, duration, genre, poster } = req.body;
    try {
      const newMovie = await movieService.createMovie({
        title,
        year,
        director,
        duration,
        genre,
        poster,
      });
      res.status(200).json(newMovie);
    } catch (error) {
      res
        .status(500)
        .json({ error: "error interto de servidor" + error.message });
    }
  },
};
