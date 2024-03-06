import { NextResponse } from "next/server";
import clientPromise from "../../../../database/index";
import {
  getRecipes,
  updateRecipe,
} from "../../../../database/controllers/recipesController";

export async function GET(Request: any) {
  try {
    let recipes = await getRecipes();
    return NextResponse.json({ recipes });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
      statusText: `Internal Server Error :  ${error}`,
    });
  }
}

export async function PATCH(Request: any) {
  try {
    console.log(`PATCH request is equal to ${Request}`);
    // let res = await updateRecipe(Request)
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
      statusText: `Internal Server Error :  ${error}`,
    });
  }
}
