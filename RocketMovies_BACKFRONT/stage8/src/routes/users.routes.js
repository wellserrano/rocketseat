const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const UsersControllers = require("../controllers/UsersControllers")

const userAvatarController = new UserAvatarController();
const usersControllers = new UsersControllers();

usersRoutes.post("/", usersControllers.create)
usersRoutes.put("/", ensureAuthenticated, usersControllers.update)
usersRoutes.delete("/", ensureAuthenticated, usersControllers.delete);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  userAvatarController.update
);


module.exports = usersRoutes;

