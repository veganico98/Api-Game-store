import express from 'express'
import gameController from "../../controller/game/gameController.js"

const routerGame = express.Router()


routerGame.get("/game/:id", gameController.getGame)

routerGame.get("/games", gameController.getGames)

routerGame.post("/game", gameController.createActor)

routerGame.delete("/game/:id", gameController.destroyGame)

routerGame.patch("/actor/:id", gameController.updateGame)

export default routerGame