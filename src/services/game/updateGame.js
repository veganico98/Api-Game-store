import Game from "../../model/game/Game.js"

const update = async (data, id) => {
    const qtd = await Game.update(data, {
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

export default update