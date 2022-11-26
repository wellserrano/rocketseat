const { Router } = require("express");

const favoritesRoutes = Router();

const FavoriteMoviesControllers = require("../controllers/FavoriteMoviesControllers");
const favoriteMoviesControllers = new FavoriteMoviesControllers();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

favoritesRoutes.use(ensureAuthenticated);

favoritesRoutes.post('/', favoriteMoviesControllers.create)
favoritesRoutes.get('/', favoriteMoviesControllers.read)
favoritesRoutes.put('/', favoriteMoviesControllers.update)
favoritesRoutes.delete('/:fav_id', favoriteMoviesControllers.delete);

module.exports = favoritesRoutes;