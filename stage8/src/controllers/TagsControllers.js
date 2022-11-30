const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class TagsControllers {

  async read(req, res) {
    const movie_id = Number(req.query.movie_id)
    const user_id = req.user.id;
    
    // const tags = 
    //   await knex("tags")
    //   .join("movies", {'movies.id': movie_id, 'movies.user_id': user_id})
    //   .where({'tags.user_id': user_id, 'tags.movie_id': movie_id})
    //   .groupBy('tags.id')

    const tags = 
      await knex("tags")
      .select('name')
      .where({'tags.user_id': user_id, 'tags.movie_id': movie_id})
      
    return res.json(tags);

  };

  async create(req, res) {
    const { movie_id, tags } = req.body;
    const user_id = req.user.id;

    const tagsInsert = tags.map(tag => {
      return {
        movie_id,
        user_id,
        name: tag
      }
    });

    await knex("tags")
      .insert(tagsInsert);

    return res.status(201).json()

  };

  async update(req, res) {
    const { movie_id, rating } = req.body;
    const user_id = req.user.id;

    await knex("userMovies")
     .where({ user_id, movie_id })
     .update({
        user_id,
        movie_id,
        rating: rating ?? null,
     });

    res.json();

  };
  
  async delete(req, res) {
    const { fav_id } = req.params;

    await knex("userMovies")
     .where({ id: fav_id })
     .del()
     .catch( err => {throw new ErrorApp('Movie not found', 404)}); //catch isn't working

    res.json();
  };

};

module.exports = TagsControllers;