"use client";

import { Fragment, useEffect, useState } from "react";
import RecipeCard from "../Recipe_Card/[slug]/page";
import Link from "next/link";

type Recipe = {
  _id: number;
  Title: string;
  Ingredients: { [key: string]: any };
};

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getRecipes(): Promise<void> {
    try {
      setIsLoading(true);
      const response = await (
        await fetch(process.env.URL + "/api/recipes")
      ).json();
      const { recipes } = response;
      setRecipes(recipes);
      console.log(JSON.stringify(recipes[0]["Ingredients"]));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getRecipes();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      {isLoading ? (
        <div
          className='animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full'
          role='status'
          aria-label='loading'
        >
          <span className='sr-only'>Loading...</span>
        </div>
      ) : (
        <>
          {recipes.map((item) => (
            <div
              className='flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400'
              key={item._id}
            >
              <Link
                href={{
                  pathname: `/Recipe_Card/${item._id}`,
                  query: { i: item.Ingredients[0] },
                }}
              >
                {item.Title}
              </Link>
              {/* {Object.keys(item.Ingredients[0]).map((keyName, i) => (
                <div>{keyName}</div>
              ))} */}
            </div>
          ))}
        </>
      )}
    </Fragment>
  );
}
