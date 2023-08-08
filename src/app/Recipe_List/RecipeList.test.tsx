import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import RecipeList from './RecipeList';

describe('Recipe List', () => {
  let fetch: any = undefined;
  const mockRecipes = {
    recipes: [
      { _id: 1, Title: 'Mock Bread 1' },
      { _id: 2, Title: 'Mock Bread 2' },
    ],
  };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockRecipes),
    })
);

  // beforeEach(() => {
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve(mockRecipes),
  //     })
  //   );
  // });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders a Recipe List', () => {
    // fetchMock.mockReturnValue(Promise.resolve(new Response(mockRecipes)));

    render(<RecipeList />);
    // expect(fetch).toHaveBeenCalledTimes(1);
    console.log(fetch)
  });
});
