const { verify } = require("jsonwebtoken")
const authConfig = require("../configs/auth")
const AppError = require("../utils/AppError")


function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT invalid", 401)
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);

    req.user = {
      id: Number(user_id)
    }

    return next();
    
  } catch (err) {

    console.error(err)
    throw new AppError("JWT forgotten", 401);

  }
}

module.exports = ensureAuthenticated;