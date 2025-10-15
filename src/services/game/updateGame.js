import Game from "../../model/game/Game.js"

const updateAGame = async (data, id) => {
    const qtd = await Game.updateGame(data, {
        where: {
            id
        }
    })

    if (qtd == 0) {
        return false
    }

    const game = await Game.findByPk(id)

    return game
}

export default updateAGame