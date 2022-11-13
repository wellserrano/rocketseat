const { Router } = require("express");

const moviesRoutes = Router();

const MoviesControllers = require("../controllers/MoviesControllers")
const moviesControllers = new MoviesControllers();

moviesRoutes.post("/", moviesControllers.create);

module.exports = moviesRoutes;

