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
    const data = await Request.json();
    console.log(`PATCH request is equal to ${data}`);
    // let res = await updateRecipe(Request)
    return NextResponse.json("test");
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
      statusText: `Internal Server Error :  ${error}`,
    });
  }
}
