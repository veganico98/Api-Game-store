import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Publisher = sequelize.define('publisher',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Publisher