const { Router } = require("express");

const routes = Router();

const usersRoutes = require("./users.routes")
const moviesRoutes = require("./movies.routes")
const tagsRoutes = require("./tags.routes")
const sessionsRoutes = require("./sessions.routes");

routes.use("/user", usersRoutes)
routes.use("/movie", moviesRoutes)
routes.use("/tags", tagsRoutes)
routes.use("/sessions", sessionsRoutes);

module.exports = routes;