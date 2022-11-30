const { Router } = require('express');

const notesRoutes = Router();

//Controllers
const NotesController = require("../controller/NotesController")
const notesController = new NotesController();

//Auth
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

notesRoutes.use(ensureAuthenticated);

notesRoutes.post('/', notesController.create);
notesRoutes.get('/', notesController.show);
notesRoutes.delete('/', notesController.delete);
notesRoutes.get('/', notesController.index);


module.exports = notesRoutes;