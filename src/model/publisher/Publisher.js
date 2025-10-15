import { DataTypes } from "@sequelize/core"
import sequelize from "../../config/database.js";

const Publisher = sequelize.define('publisher',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Publisher