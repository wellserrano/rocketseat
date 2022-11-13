const { hash, compare } = require("bcrypt")
const sqliteConn = require("../database/sqlite");
const AppError = require("../utils/AppError")

class UsersControllers {
  async checkStatus(req, res) {
    res.json({message: 'Route OK'})
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

  };

  async update(req, res) {
    const { name, email, old_password, new_password, avatar } = req.body;
    const { user_id } = req.params;

    const db = await sqliteConn();

    const user = await db.get(`
      SELECT name, email, password, avatar 
      FROM users
      WHERE id = ?
      `,
      [user_id]
    );

    const userWithUpdatedEmail = await db.get(`
      SELECT id, email
      FROM users
      WHERE email = ?
      `,
      [email]
    );

    
    
    if (!user) {
      throw new AppError(`User with id ${user_id} not found`, 404);
    };
        
    if (userWithUpdatedEmail && user.id !== userWithUpdatedEmail.id) {
      throw new AppError(`Email already in use`, 400);
    };

    let hashedPassword;

    if (old_password && new_password) {
      const checkOldPassword = await compare(old_password, user.password);
      hashedPassword = await hash(new_password, 8);

      if (!checkOldPassword) throw new AppError(`Your current password is incorrect`, 400);
    };
        
    await db.run(`
      UPDATE 
        users
      SET 
        name =?, 
        email =?, 
        password =?, 
        avatar =?, 
        updated_at = DATETIME('now')
      WHERE 
        id =?
      `,
      [ 
        name ?? user.name, 
        email ?? user.email, 
        hashedPassword ?? user.password, 
        avatar ?? user.avatar, 
        user_id
      ]);

    return res.status(200).json();

  };
};

module.exports = UsersControllers;