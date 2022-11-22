const { Router } = require('express');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router();

//Controllers
const UsersController = require("../controller/UserController")
const usersController = new UsersController();


const multer = require("multer")
const uploadConfig = require("../configs/upload");

const upload = multer(uploadConfig.MULTER);

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);

usersRoutes.patch("/avatar", ensureAuthenticated, upload.single('avatar'), 
  (req, res) => {
  console.log(req.file.filename);
  res.json();
  });



module.exports = usersRoutes;