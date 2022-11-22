const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
  async update(req, res) {
    const user_id = req.user.id;
    const avatarFilename = req.file.filename;

    const diskStorage = new DiskStorage();

    const user = await knex("users")
      .where({ id: user_id }).first();

    if (!user) {
      throw new AppError("You must be authenticated to change the avatar", 401);
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar)
    }

    const fileName = await diskStorage.saveFile(avatarFilename);
    user.avatar = fileName;

    await knex("users").update(user).where({ id: user_id});

    return res.json(user);
  }
}

module.exports = UserAvatarController;