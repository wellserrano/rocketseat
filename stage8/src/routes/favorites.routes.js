const { Router } = require("express");

const favoritesRoutes = Router();

const FavoriteMoviesControllers = require("../controllers/FavoriteMoviesControllers");
const favoriteMoviesControllers = new FavoriteMoviesControllers();

favoritesRoutes.post('/', favoriteMoviesControllers.create);

module.exports = favoritesRoutes;