import express from 'express'
import routerGame from "./routers/game/game.js"
import routerUser from './routers/users/user.js'

const app = express()

app.use(express.json())
app.use(routerGame)
app.use(routerUser)

export default app