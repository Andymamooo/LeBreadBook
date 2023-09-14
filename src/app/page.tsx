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
      <div
        className='max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700'
        role='alert'
      >
        <div className='columns-1 items-center'>
          <RecipeList />
        </div>
      </div>
    </main>
  );
}
