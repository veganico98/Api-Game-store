import Game from "../../model/game/Game.js"
import Publisher from "../../model/publisher/Publisher.js"

const getAll = async () => {
    const games = await Game.findAll({
        include: Publisher
    })
}

export default getAll