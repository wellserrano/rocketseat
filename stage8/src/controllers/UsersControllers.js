const { hash, compare } = require("bcrypt")
const knex = require("../database/knex");
const AppError = require("../utils/AppError")

class UsersControllers {
  async checkStatus(req, res) {
    res.json({message: 'Route OK'})
  }

  async create(req, res) {
    const { name, email, password } = req.body;

    const checkUserExists = await knex("users")
      .where({ email })
      .first()

    if (checkUserExists) {
      throw new AppError("Email already in use", 400)
    }
      
    const hashedPassword = await hash(password, 8)
    
    await knex("users")
      .insert({
        name,
        email,
        password: hashedPassword,
      });

    return res.status(201).json();

  };

  async read(req, res) {
    

    const users = await knex("users")

    return res.status(200).json(users);
  }

  async update(req, res) {
    const { name, email, old_password, new_password, avatar } = req.body;
    const user_id = req.user.id;

    const user = await knex("users")
      .where({ id: user_id })
      .first()

    
    const userWithUpdatedEmail = await knex("users")
      .select("id", "email")
      .where({ email: email ?? user.email})
      .first()
   
    
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
        
    await knex("users")
      .where({ id: user_id })
      .update({
        name: name ?? user.name,
        email: email ?? user.email,
        password: hashedPassword ?? user.password,
        avatar: avatar ?? user.avatar,
        updated_at: knex.fn.now()
      });

    return res.status(200).json();

  };

  async delete(req, res) {
    const user_id = req.user.id;

    await knex("users")
     .where({ id: user_id })
     .del()
     .catch( err => {throw new ErrorApp('User not found', 404)}); //catch isn't working

    res.json();

  };
};

module.exports = UsersControllers;