"use client";

import Input from "../../components/Input";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function RecipeCard(props) {
  const searchParams = useSearchParams();
  const ingredients = searchParams.get("i");
  useEffect(() => {
    console.log("hello");
    console.log(JSON.stringify(ingredients));
  }, []);
  return (
    <div className='flex flex-col'>
      <Input />
    </div>
  );
}
