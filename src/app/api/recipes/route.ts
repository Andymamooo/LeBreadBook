import { NextResponse } from "next/server";
import clientPromise from "../../../../database/index";
import { getRecipes } from "../../../../database/controllers/recipesController";

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
