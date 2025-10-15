import Game from "../../model/game/Game"

const destroy = async (id) => {
    const game = await Game.destroy({
        where: {
            id
        }
    })
    if (!game){
        return true
    }

    return game
}

export default destroy