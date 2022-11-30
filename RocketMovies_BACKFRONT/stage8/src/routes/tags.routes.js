const { Router } = require("express");

const tagsRoutes = Router();

const TagsControllers = require("../controllers/TagsControllers");
const tagsControllers = new TagsControllers();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

tagsRoutes.use(ensureAuthenticated);

tagsRoutes.post('/', tagsControllers.create)
tagsRoutes.get('/', tagsControllers.read)
tagsRoutes.put('/', tagsControllers.update)
tagsRoutes.delete('/:fav_id', tagsControllers.delete);

module.exports = tagsRoutes;