const Recipes = require('../models/recipes');

const getRecipes = async() => {
  try {
    console.log(`inside getrecipes!`)
    let allRecipes = await Recipes.find();
    console.log(`allRecipes is equal to ${allRecipes}`);
  } catch(error) {
    console.error(error);
  }
}

const updateRecipe = async(recipeId) => {
  try {

  } catch(error) {
    console.error(error);
  }
}

module.exports = {getRecipes, updateRecipe}