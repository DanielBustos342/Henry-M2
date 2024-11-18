const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const moviesRoutes = Router();

moviesRoutes.get("/", moviesController.getAllMovies);

module.exports = moviesRoutes;
