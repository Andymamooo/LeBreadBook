"use client";

import { RecipesResponse } from "../../../interfaces/Recipe";

async function getRecipes(): Promise<RecipesResponse> {
  try {
    const response = await fetch(process.env.URL + "/api/recipes");
    const recipes = await response.json();
    console.log(`recipes from fetch is equal to ${JSON.stringify(recipes)}`);
    return recipes;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default function Home() {
  const recipes = getRecipes();

  return <main>Recipes</main>;
}
