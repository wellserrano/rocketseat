exports.up = knex => knex.schema.createTable("movies",
  table => {
    table.increments("id").primary();
    table.text("title").notNullable();
    table.text("description");
    table.integer("year").notNullable();
    table.text("director");
    table.integer("rating");
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  }

)


exports.down = knex => knex.schema.dropTable("movies");