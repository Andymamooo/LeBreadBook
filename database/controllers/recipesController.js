// const Recipes = require("../models/recipes");
import clientPromise from "../index";

const getClient = async () => {
  const client = await clientPromise;
  return client.db("sample_recipes");
};

export const getRecipes = async () => {
  try {
    const db = await getClient();
    let recipes = await db.collection("recipes").find({}).toArray();
    return recipes;
  } catch (error) {
    console.error(error);
  }
};

export const updateRecipe = async (recipeId) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

export const addRecipe = async (recipe) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
