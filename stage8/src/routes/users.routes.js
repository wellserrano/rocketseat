const { Router } = require("express");

const usersRoutes = Router();

const UsersControllers = require("../controllers/UsersControllers")
const usersControllers = new UsersControllers();

usersRoutes.get("/-", usersControllers.checkStatus)
usersRoutes.post("/", usersControllers.create)
usersRoutes.get("/", usersControllers.read)
usersRoutes.put("/:user_id", usersControllers.update)
usersRoutes.delete("/:user_id", usersControllers.delete);


module.exports = usersRoutes;

