const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class FavoriteMoviesControllers {

  async read(req, res) {
    const { user_id } = req.params;

    const favoriteMovies = 
      await knex("userMovies")
        .where("userMovies.user_id", user_id)

    const userData =
      await knex("users")
      .where("id", user_id)
      .first();

    const favoritesData = {
      user_id: user_id,
      user_name: userData.name,
      favoriteMovies: favoriteMovies,
    };

    return res.json(favoritesData);

  };

  async create(req, res) {
    const { user_id, movie_id, rating } = req.body;

    const checkFavMovie = await knex("userMovies")
      .where({ user_id, movie_id })

    if (!checkFavMovie) throw new AppError("This Movie has already been favorited", 400)

    await knex("userMovies")
      .insert({
        user_id,
        movie_id,
        rating,
      })

    return res.status(201).json()

  };

  async update(req, res) {
    const { user_id, movie_id, rating } = req.body;

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

module.exports = FavoriteMoviesControllers;