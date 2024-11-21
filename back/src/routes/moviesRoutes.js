const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const moviesRoutes = Router();

moviesRoutes.get("/", moviesController.getAllMovies);

moviesRoutes.post("/", moviesController.createMovie);

moviesRoutes.get("/byName", moviesController.getMovieByName);

moviesRoutes.get("/:id", moviesController.getMovieById);

module.exports = moviesRoutes;
