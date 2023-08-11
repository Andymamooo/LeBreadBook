import type { WithId, Document } from "mongodb";

export interface Ingredient {
  [key: string]: number;
}

export interface Recipe {
  _id: string;
  Title: string;
  Ingredients: Ingredient[];
  __v: number;
}

export interface MongoRecipeResponse extends WithId<Document> {
  Title: string;
  Ingredients: Ingredient[];
  __v: number;
}

export interface RecipesResponse {
  recipes: Recipe[];
}
