const { Router } = require('express');

const usersRoutes = Router();

//Controllers
const UsersController = require("../controller/UserController")
const usersController = new UsersController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/:id', usersController.update);


module.exports = usersRoutes;