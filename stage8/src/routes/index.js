const { Router } = require("express");

const routes = Router();

const usersRoutes = require("./users.routes")
const moviesRoutes = require("./movies.routes")
const favoritesRoutes = require("./favorites.routes");

routes.use("/user", usersRoutes)
routes.use("/movie", moviesRoutes)
routes.use("/fav", favoritesRoutes);

module.exports = routes;