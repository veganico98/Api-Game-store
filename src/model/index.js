import sequelize from "../config/database.js"
import Game from "./game/Game.js"
import Publisher from "./publisher/Publisher.js"

Game.hasMany(Publisher, {
    foreignKey:{
        name: "publisherId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }
})

sequelize.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("Todas as tabelas foram sicronizadas com sucesso.")
})

export default {
    Game
}