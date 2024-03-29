// const Recipes = require("../models/recipes");
import clientPromise from "../index";
import { Collection } from "mongodb";
import { Recipe } from "../../interfaces/Recipe";
import type { WithId, Document } from "mongodb";

export const getClient = async () => {
  const client = await clientPromise;
  return client.db("sample_recipes");
};

export const getRecipes = async (): Promise<WithId<Document>[]> => {
  try {
    const db = await getClient();
    let recipes = await db.collection("recipes").find({}).toArray();
    return recipes;
  } catch (error) {
    console.error(error);
    throw error;
    1;
  }
};

export const updateRecipe = async (recipeId) => {
  try {
    const db = await getClient();
    const query = { _id: recipeId };
    let recipes = await db.collection("recipes").findOne(query);
    console.log(recipes);
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
