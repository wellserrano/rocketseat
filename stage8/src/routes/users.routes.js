const { Router } = require("express");

const usersRoutes = Router();

const UsersControllers = require("../controllers/UsersControllers")
const usersControllers = new UsersControllers();

usersRoutes.get("/-", usersControllers.checkStatus);
usersRoutes.post("/", usersControllers.create);
usersRoutes.put("/:user_id", usersControllers.update);


module.exports = usersRoutes;

