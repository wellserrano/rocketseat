const { Router } = require("express")

const tagsRoutes = Router();

const TagController = require('../controller/TagsController')
const tagController = new TagController();

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')


tagsRoutes.get('/', ensureAuthenticated, tagController.show)

module.exports = tagsRoutes;