const { hash, compare } = require("bcrypt")
const sqliteConn = require("../database/sqlite");
const AppError = require("../utils/AppError")

class UsersControllers {
  async checkStatus(req, res) {
    res.json({message: 'Server OK'})
  }

  async create(req, res) {
    const { name, email, password, avatar } = req.body;

    console.log(req.body)

    const db = await sqliteConn();

    const checkUserExists = await db.get(`
      SELECT * FROM users
      WHERE email = ?
      `,
      [email]
    );

    if (checkUserExists) {
      throw new AppError(`Email ${name} already in use`, 406)
    };

    const hashedPassword = await hash(password, 8)
    
    await db.run(`
      INSERT INTO users (name, email, password, avatar)
      VALUES (?,?,?,?)`,
      [name, email, hashedPassword, avatar ?? null]
    );

    return res.status(201).json();

  }
}

module.exports = UsersControllers;