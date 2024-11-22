const movieService = require("../services/movieService");
const catchAsync = require("../utils/catchAsync");

const getAllMovies = async (req, res) => {
  const movies = await movieService.getMovies();
  res.status(200).json(movies);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await movieService.getMovieById(id);
  res.status(200).json(movie);
};

const getMovieByName = async (req, res) => {
  const { title } = req.body;
  const movie = await movieService.findMovieByName(title);
  res.status(200).json(movie);
};

const createMovie = async (req, res) => {
  console.log("Datos recibidos:", req.body);
  const { title, year, director, duration, genre, poster } = req.body;
  const newMovie = await movieService.createMovie({
    title,
    year,
    director,
    duration,
    genre,
    poster,
  });
  res.status(200).json(newMovie);
};

module.exports = {
  getAllMovies: catchAsync(getAllMovies),
  getMovieById: catchAsync(getMovieById),
  getMovieByName: catchAsync(getMovieByName),
  createMovie: catchAsync(createMovie),
};
