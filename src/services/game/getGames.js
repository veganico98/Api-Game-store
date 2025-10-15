import Game from "../../model/game/Game"
import Publisher from "../../model/publisher/Publisher"

const getAll = async () => {
    const games = await Game.findAll({
        include: Publisher
    })
}

export default getAll