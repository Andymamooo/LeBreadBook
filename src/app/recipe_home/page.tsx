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
    const response = await fetch(process.env.URL + "/api/recipes", {
      method: "GET",
    });
    const recipes = await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default function Home() {
  const recipes = getRecipes();

  return <main>Recipes</main>;
}
