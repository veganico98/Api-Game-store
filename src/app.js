import express from 'express'
import routerGame from "./routers/game/game.js"

const app = express()

app.use(express.json())
app.use(routerGame)

export default app