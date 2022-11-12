const createUsers = `
CREATE TABLE IF NOT EXISTS
    users (
    id integer not null primary key autoincrement,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    avatar varchar(255) null,
    created_at TIMESTAMP not null default CURRENT_TIMESTAMP,
    updated_at TIMESTAMP null,
    "status" BOOLEAN DEFAULT true NOT NULL
  )
  
  `   ;

module.exports = createUsers;