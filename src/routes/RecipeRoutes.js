const express = require('express')
const router = express.Router()
const RecipeController = require('../controllers/RecipeController')

router.get("/recipe", RecipeController.getAllRecipe);
router.get("/recipe/category", RecipeController.getAllCategory);
router.get("/recipe/:slug", RecipeController.getDetailRecipe);

module.exports = router