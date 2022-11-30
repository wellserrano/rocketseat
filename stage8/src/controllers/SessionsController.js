const knex = require("../database/knex")

const { compare } = require("bcrypt")
const { sign } = require("jsonwebtoken")

const AppError = require("../utils/AppError")

const authConfig = require("../configs/auth");



class SessionsController {
  async create(req, res) {
    const { password, email } = req.body

    const user = await knex("users")
      .where({ email })
      .first()

    const passwordCheck = user ? await compare(password, user.password) : false

    if (!user || !passwordCheck) {
      throw new AppError('Usuário ou senha incorretos', 401)
    };

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return res.json({user, token});
  };
};

module.exports = SessionsController