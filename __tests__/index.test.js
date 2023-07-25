import Home from "../src/app/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react';

describe("Main Page", () => {
  it("renders a main page", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByText("Main Page")).toBeInTheDocument();
  });
});
