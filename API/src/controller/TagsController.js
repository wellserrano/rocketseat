const knex = require('../database/knex')

class TagsController {
  async show(req, res) {
    const { note_id } = req.params

    const tag = await knex('tags')
      .where({ note_id })
      .innerJoin("notes", "tags.note_id", "notes.id")

    if (!tag) return res.status(404).json({ message: 'Note not found' })
    
    return res.status(200).json(tag)
  }
}

module.exports = TagsController;