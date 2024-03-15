"use client";

import Input from "../../components/Input";
import { Fragment, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function RecipeCard() {
  const searchParams = useSearchParams();
  const [ingredients, setIngredients] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setID] = useState(null);
  const [totalWeight, setWeight] = useState(0);

  async function handleTest(e) {
    try {
      e.preventDefault();
      console.log("handling test!");
      const response = await fetch(process.env.URL + "/api/recipes", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      });
    } catch (error) {
      console.error(error);
    }
  }

  const renderIngredients = (ingredients) => {
    return Object.keys(ingredients).map((item, i) => {
      const value = ingredients[item];
      return (
        <div className='flex items-center space-x-4' key={`${item}_${i}`}>
          <span className='w-32'>{item}</span>:
          {typeof value === "object" ? (
            renderIngredients(value) // Recursively render nested ingredients
          ) : (
            <input
              type='number'
              value={value}
              onChange={(e) => handleInputChange(e, item)}
            />
          )}
        </div>
      );
    });
  };
  useEffect(() => {
    const encodedIngredients = searchParams.get("ingredients");
    const encodedID = searchParams.get("id");
    if (encodedIngredients) {
      try {
        const parsedIngredients = JSON.parse(encodedIngredients);
        console.log(
          `parsedIngredients is equal to ${JSON.stringify(parsedIngredients)}`
        );
        setIngredients(parsedIngredients);
        setIsLoading(false);
      } catch (error) {
        console.error("Error while getting Ingredients", error);
      }
    }
    if (encodedID) {
      try {
        const parsedID = JSON.parse(encodedID);
        setID(parsedID);
      } catch (error) {
        console.error("Error while getting ID", error);
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
        <div className='flex flex-col items-center space-y-4 p-4 justify-center h-screen'>
          <button onClick={handleTest}>EDIT</button>
          {renderIngredients(ingredients)}
        </div>
      )}
    </Fragment>
  );
}
