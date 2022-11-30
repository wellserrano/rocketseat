const { Router } = require('express');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router();

//Controllers
const UserAvatarController = require('../controller/UserAvatarController')
const UsersController = require("../controller/UserController")
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();


const multer = require("multer")
const uploadConfig = require("../configs/upload");

const upload = multer(uploadConfig.MULTER);

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);

usersRoutes.patch("/avatar", ensureAuthenticated, upload.single('avatar'), userAvatarController.update);



module.exports = usersRoutes;