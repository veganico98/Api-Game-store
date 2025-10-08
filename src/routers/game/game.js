import express from 'express'
import gameController from "../../config/controller/game/gameController.js"

const routerGame = express.Router()

routerGame.get("/game", gameController.getGame)

routerGame.get("/games", gameController.getGames)

export default routerGame