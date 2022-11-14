const { Router } = require("express");

const moviesRoutes = Router();

const MoviesControllers = require("../controllers/MoviesControllers")
const moviesControllers = new MoviesControllers();

moviesRoutes.post("/", moviesControllers.create);
moviesRoutes.get("/", moviesControllers.read);
moviesRoutes.put("/:movie_id", moviesControllers.update);
moviesRoutes.delete("/:movie_id", moviesControllers.delete);

module.exports = moviesRoutes;

