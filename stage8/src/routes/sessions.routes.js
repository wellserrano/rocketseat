const { Router } = require("express")

const SessionsController = new (require("../controllers/SessionsController"))()
// const sessionsController = new SessionsController();


const sessionsRoutes = Router()

sessionsRoutes.post("/", SessionsController.create)

module.exports = sessionsRoutes;