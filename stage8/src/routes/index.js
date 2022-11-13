const { Router } = require("express")

const routes = Router();

const usersRoutes = require("./users.routes")
const moviesRoutes = require("./users.routes");

routes.use("/user", usersRoutes)
routes.use("/movie", moviesRoutes);

module.exports = routes;