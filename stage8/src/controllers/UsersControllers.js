class UsersControllers {
  async getUsers(req, res) {
    res.json({message: 'Server OK'})
  }
}

module.exports = UsersControllers;