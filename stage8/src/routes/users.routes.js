const { Router } = require("express");

const usersRoutes = Router();

const UsersControllers = require("../controllers/UsersControllers")
const usersControllers = new UsersControllers();

usersRoutes.get("/-", usersControllers.checkStatus);
usersRoutes.get("/", usersControllers.create);


module.exports = usersRoutes;

