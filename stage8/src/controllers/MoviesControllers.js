const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MoviesControllers {

  async create(req, res) {
    const { title, description, year, director, rating } = req.body;
    const user_id = req.user.id

    const checkMovieExists = await knex("movies")
      .where({ title, year, director })
      .first()

    if (checkMovieExists) {
      throw new AppError("Movie already created", 400)
    }
    
    const movie_id = await knex("movies")
      .insert({
        title,
        description,
        year,
        director,
        rating,
        user_id
      })
      
      return res.status(201).json(movie_id);
  };

  async read(req, res) {
      const user_id = req.user.id;
      const { like } = req.query

      const movies = await knex("movies")
        .where({ user_id })
        .andWhereLike('title', `${like}%`)

      // console.log('movies', movies)

      // const tagsAndMovies = [];

      // movies.forEach(async movie => {
      //   const response = await knex("tags")
      //     .where({user_id, movie_id: movie.id})

      //   tagsAndMovies.push({...movie, tags: response[0].name})
      // })   
      
      const promises = movies.map(async (movie) => {
        const response = await knex("tags")
          .select('name')
          .where({user_id, movie_id: movie.id})

          const tags = response.map(e => e.name)
        
          return {...movie, tags: tags}
        })
        
        const tagsAndMovies = await Promise.all(promises)
      
      return res.status(200).json(tagsAndMovies);
    }
    
  async update(req, res) {
    const { title, description, year, director, rating } = req.body;
    const { movie_id } = req.params;

    const movie = await knex("movies")
      .where({ id: movie_id })
      .first()

    
        
    await knex("movies")
      .where({ id: movie_id })
      .update({
        title:       title ?? movie.title,
        description: description ?? movie.description,
        year:        year ?? movie.year,
        director:    director ?? movie.director,
        rating:      rating ?? movie.rating,
        updated_at:  knex.fn.now()
      });

    return res.status(200).json();
  };

  async delete(req, res) {
    const { movie_id } = req.params;

    await knex("movies")
     .where({ id: movie_id })
     .del()
     .catch( err => {throw new ErrorApp('Movie not found', 404)}); //catch isn't working

    res.json();

  };

};

module.exports = MoviesControllers;