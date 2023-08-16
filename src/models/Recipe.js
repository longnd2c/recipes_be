const { Model, DataTypes } = require("sequelize");
const sequelize = require('../../database')

class Recipe extends Model {}

Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    review: {
        type: DataTypes.INTEGER,
    },
    star: {
        type: DataTypes.NUMBER,
    },
    level: {
        type: DataTypes.STRING,
    },
    totalTime: {
        type: DataTypes.STRING,
    },
    prepTime: {
        type: DataTypes.STRING,
    },
    cookTime: {
        type: DataTypes.STRING,
    },
    yield: {
        type: DataTypes.STRING,
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    directions: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categories: {
        type: DataTypes.STRING,
    },
    slug: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: "recipe"
})

module.exports = Recipe