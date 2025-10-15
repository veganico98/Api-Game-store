import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Game = sequelize.define('game', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    multiplayer: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

export default Game