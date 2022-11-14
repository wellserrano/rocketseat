const { Router } = require("express");

const favoritesRoutes = Router();

const FavoriteMoviesControllers = require("../controllers/FavoriteMoviesControllers");
const favoriteMoviesControllers = new FavoriteMoviesControllers();

favoritesRoutes.post('/', favoriteMoviesControllers.create)
favoritesRoutes.get('/:user_id', favoriteMoviesControllers.read)
favoritesRoutes.put('/', favoriteMoviesControllers.update)
favoritesRoutes.delete('/:fav_id', favoriteMoviesControllers.delete);

module.exports = favoritesRoutes;