'use client';

import { Fragment, useEffect, useState } from 'react';

type Recipe = {
  _id: number;
  Title: string;
  Ingredients: { [key: string]: any };
};

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getRecipes() {
    try {
      setIsLoading(true);
      const response = await (
        await fetch(process.env.URL + '/api/recipes')
      ).json();
      const { recipes } = response;
      setRecipes(recipes);
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
        <p>Loading ...</p>
      ) : (
        <ul>
          {recipes.map((item) => (
            <li key={item._id}>{item.Title}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
