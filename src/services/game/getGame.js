import model from "../../model/index.js"


const getOne = async (id) => {
    try{
        const game = await model.Game.findOne({
            where: {
                id: id,
            },
        });

        if (!game){
            return false
        }

        return game;
    }catch (error){
        throw new Error(error.message)
    }
};

export default getOne;