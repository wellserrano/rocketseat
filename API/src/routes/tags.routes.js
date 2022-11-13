const { Router } = require("express")

const tagsRoutes = Router();

const TagController = require('../controller/TagsController')
const tagController = new TagController();

tagsRoutes.get('/:note_id', tagController.show)

module.exports = tagsRoutes;