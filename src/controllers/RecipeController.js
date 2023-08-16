const RecipeModel = require('../models/Recipe')
const Category = require('../models/Category')
const { Op } = require("sequelize");

module.exports = {
    getAllRecipe: async (req, res) => {
        try {
            const s = req.query.s;
            const c = req.query.c;
            let page = parseInt(req.query.page) || 1;
            let limit = parseInt(req.query.limit) || 9;
            let cond = {}
            if(s) cond = {[Op.or]: [{title: {[Op.substring]: s}}, {ingredients: {[Op.substring]: s}}]}
            if(c instanceof Array) {
                const tempCat = []
                c.map((cat) => {
                    tempCat.push({[Op.substring]: cat})
                })
                cond.categories = {[Op.or]: tempCat}
            }
            else if(c){
                cond.categories = {[Op.substring]: c}
            }
            const recipes = await RecipeModel.findAll({where: cond, limit: limit, offset: (page - 1)*limit})
            const totalRecipes = await RecipeModel.count({where: cond})
            return res.status(200).json({
                status: true,
                data: recipes,
                isMore: totalRecipes > limit*page
            });
        } catch (err) {
            return res.status(500).json({
                status: false,
                error: err,
            });
        }
    },
    getDetailRecipe: async (req, res) => {
        try {
            const recipe = await RecipeModel.findOne({where: { slug: req.params.slug }})
            if(recipe){
                const lstCatId = recipe.categories.split(",");
                const lstIng = recipe.ingredients.split("|");
                const lstDir = recipe.directions.split("|");
                const lstCat = await Category.findAll({where : {id: {[Op.in]: lstCatId}}, attributes: ['id', 'name']})
                recipe.ingredients = lstIng
                recipe.directions = lstDir
                recipe.categories = lstCat
            }
            return res.status(200).json({
                status: true,
                data: recipe,
            });
        } catch (err) {
            return res.status(500).json({
                status: false,
                error: err,
            });
        }
    },
    getAllCategory: async (req, res) => {
        try {
            const cats = await Category.findAll({})
            return res.status(200).json({
                status: true,
                data: cats,
            });
        } catch (err) {
            return res.status(500).json({
                status: false,
                error: err,
            });
        }
    },
};