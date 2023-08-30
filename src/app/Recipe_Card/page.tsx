"use client";

import { Fragment, useEffect, useState } from "react";

export default function RecipeCard() {

  return (
    <Fragment>
        <div className="flex rounded-md shadow-sm">
          <span className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Default</span>
          <input type="text" className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></input>
        </div>
    </Fragment>
  );
}
