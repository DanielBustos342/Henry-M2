const { Router } = require("express");
const moviesRoutes = require("./moviesRoutes");

const router = Router();

router.use("/movies", moviesRoutes);

// router.use("/movies/byName", moviesRoutes);

router.use("/movies/:id", moviesRoutes);


module.exports = router;
