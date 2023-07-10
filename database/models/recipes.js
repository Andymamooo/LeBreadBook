const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    unique: true,
  },
  Ingredients: {
    type: Array,
    required: true,
  }, // array of objects [{ingredientName1: grams, bakerspercentage: percent(Number)}, {ingredientName2: grams, bakerspercentage: percent(Number)}, {ingredientName3: grams, bakerspercentage: percent(Number)}]
});

module.exports = mongoose.model('Recipe', recipeSchema);