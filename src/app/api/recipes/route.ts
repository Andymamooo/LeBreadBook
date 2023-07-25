import { NextResponse } from "next/server";
import clientPromise from "../../../../database/index";

export async function GET(Request: any) {
  try {
    const client = await clientPromise;
    const db = client.db("LeBreadBook");
    let recipes = await db.collection("Recipes").find({}).toArray();
    
    console.log("recipes:", recipes);
    return NextResponse.json({ recipes });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
      statusText: `Internal Server Error :  ${error}`,
    });
  }
}
