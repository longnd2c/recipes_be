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
        type: DataTypes.DECIMAL,
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
        type: DataTypes.TEXT,
        allowNull: false,
    },
    directions: {
        type: DataTypes.TEXT,
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
    modelName: "recipes"
})

module.exports = Recipe