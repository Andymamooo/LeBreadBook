const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/lebreadbookDB");
  await console.log("Connected to MongoDB");
}

main().catch((err) => console.log(err));

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

module.exports =
  mongoose.models.Recipes || mongoose.model("Recipes", recipeSchema);
