"use client";

import Input from "../../components/Input";
import { Fragment, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function RecipeCard() {
  const searchParams = useSearchParams();
  const [ingredients, setIngredients] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const encodedIngredients = searchParams.get("ingredients");
    if (encodedIngredients) {
      try {
        const parsedIngredients = JSON.parse(encodedIngredients);
        setIngredients(parsedIngredients);
        setIsLoading(false);
      } catch (error) {
        console.error("Error while getting Ingredients", error);
      }
    }
  }, [searchParams]);
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
        <div className='flex flex-col'>
          {Object.keys(ingredients).map((item, i) => (
            <div>{item}</div>
          ))}
        </div>
      )}
    </Fragment>
  );
}
