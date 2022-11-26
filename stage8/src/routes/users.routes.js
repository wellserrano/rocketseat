const { Router } = require("express");

const usersRoutes = Router();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const UsersControllers = require("../controllers/UsersControllers")
const usersControllers = new UsersControllers();

usersRoutes.get("/-", usersControllers.checkStatus)
usersRoutes.post("/", usersControllers.create)
usersRoutes.get("/", usersControllers.read)
usersRoutes.put("/", ensureAuthenticated, usersControllers.update)
usersRoutes.delete("/", ensureAuthenticated, usersControllers.delete);


module.exports = usersRoutes;

