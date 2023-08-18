import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import Login from "./page";
import { AppRouterContextProviderMock } from "./app-router-context-provider-mock";

describe("Login Page", () => {
  it("renders a Login Page", async () => {
    const push = jest.fn();
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <Login />
      </AppRouterContextProviderMock>
    );
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
  });
});
