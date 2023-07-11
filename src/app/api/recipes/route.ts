import type { NextFetchEvent } from 'next/server'
import {getRecipes} from '/Users/andyma/Desktop/Personal Projects/LeBreadBook/database/controllers/recipesController.js'

export async function GET(Request) {
  console.log(`hello!`)
  getRecipes();
  return new Response("This is a new API route");
}