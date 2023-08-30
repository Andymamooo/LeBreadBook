'use client';

import { useEffect } from 'react';
import RecipeCard from './Recipe_Card/page';
import RecipeList from './Recipe_List/page';

// Recipe List View
export default function Home() {
  useEffect(() => {
    import('preline');
  }, []);

  return (
    <main>
      Main Page
      <RecipeList />
      <RecipeCard />
    </main>
  );
}
