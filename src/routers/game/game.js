import express from 'express'
import gameController from "../../controller/game/gameController.js"
import auth from '../../middleware/auth.js'

const routerGame = express.Router()


routerGame.get("/game/:id", auth, gameController.getGame)

routerGame.get("/games",auth, gameController.getGames)

routerGame.post("/game",auth, gameController.createGame)

routerGame.delete("/game/:id",auth, gameController.destroyGame)

routerGame.patch("/actor/:id",auth, gameController.updateGame)

export default routerGame