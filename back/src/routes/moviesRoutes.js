const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateId = require("../middleware/validateId");
const moviesRoutes = Router();

moviesRoutes.get("/", moviesController.getAllMovies);

moviesRoutes.get("/byName", moviesController.getMovieByName);

moviesRoutes.post("/", moviesController.createMovie);

moviesRoutes.get("/:id", validateId, moviesController.getMovieById);

module.exports = moviesRoutes;
