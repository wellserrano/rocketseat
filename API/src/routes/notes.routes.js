const { Router } = require('express');

const notesRoutes = Router();

//Controllers
const NotesController = require("../controller/NotesController")
const notesController = new NotesController();

notesRoutes.post('/:user_id', notesController.create);
notesRoutes.get('/:id', notesController.show);
notesRoutes.delete('/:id', notesController.delete);
notesRoutes.get('/', notesController.index);


module.exports = notesRoutes;