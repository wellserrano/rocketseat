const { Router } = require('express');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router();

//Controllers
const UsersController = require("../controller/UserController")
const usersController = new UsersController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);


module.exports = usersRoutes;