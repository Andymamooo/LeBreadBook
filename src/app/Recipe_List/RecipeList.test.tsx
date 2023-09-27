import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import RecipeList from "./page";

describe("Recipe List", () => {
  const mockRecipes = {
    recipes: [
      { _id: 1, Title: "Mock Bread 1" },
      { _id: 2, Title: "Mock Bread 2" },
    ],
  };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockRecipes),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders a Recipe List", async () => {
    await act(async () => render(<RecipeList />));
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Mock Bread 1")).toBeInTheDocument();
    expect(screen.getByText("Mock Bread 2")).toBeInTheDocument();
  });
});
