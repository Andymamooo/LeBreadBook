import type { NextFetchEvent } from "next/server";
import { getRecipes } from "/Users/andyma/Desktop/Personal Projects/LeBreadBook/database/controllers/recipesController.js";

export async function GET(Request) {
  console.log(`get got called!`);
  let recipes = await getRecipes();
  console.log(`recipes in get is equal to ${JSON.stringify(recipes)}`);
  return new Response(
    JSON.stringify(recipes, {
      status: 200,
    })
  );
}

// import { NextResponse } from 'next/server'

// export async function GET() {
//   console.log(`hello!!`)
//   const res = 'hello'

//   return NextResponse.json(res)
// }
