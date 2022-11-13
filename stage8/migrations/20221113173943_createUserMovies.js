exports.up = knex => knex.schema.createTable("userMovies",
  table => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.integer("movie_id").references("id").inTable("movies").onDelete("CASCADE");
    table.integer("rating");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  }

)


exports.down = knex => knex.schema.dropTable("userMovies");
