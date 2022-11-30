const { Router } = require("express");

const moviesRoutes = Router();

const MoviesControllers = require("../controllers/MoviesControllers")
const moviesControllers = new MoviesControllers();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

moviesRoutes.use(ensureAuthenticated);

moviesRoutes.post("/", moviesControllers.create);
moviesRoutes.get("/", moviesControllers.read);
moviesRoutes.put("/:movie_id", moviesControllers.update);
moviesRoutes.delete("/:movie_id", moviesControllers.delete);

module.exports = moviesRoutes;

