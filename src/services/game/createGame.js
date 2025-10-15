import model from "../../model/index.js"

const createAGame = async (game) => {
    try{
        const create = await model.Game.create({
            name: game.name,
            category: game.category,
            multiplayer: game.multiplayer
        })

        if(!create){
            return false;
        }

        return create
    } catch {

    }
}

export default createAGame