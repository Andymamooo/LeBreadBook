"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

type Recipes = {
  _id: number;
  Title: string;
  Ingredients: { [key: string]: any };
};

async function getRecipes() {
  try {
    const response = await fetch("/api/recipes");
    const recipes = await response.json();
    console.log(`recipes from fetch is equal to ${JSON.stringify(recipes)}`);
  } catch (error) {
    console.log(`error is equal to ${error}`);
    console.error(error);
  }
}
export default function Home() {
  const recipes = getRecipes();

  return <main>Recipes</main>;
}
