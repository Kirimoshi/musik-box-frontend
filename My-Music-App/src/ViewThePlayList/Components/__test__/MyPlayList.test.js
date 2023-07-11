import React from "react";
import { render, screen } from "@testing-library/react";
import MyPlayListPage from "../MyPlayListPage";

describe("MyPlayListPage component", () => {
  test("renders the left menu, main container, background, and footer", () => {
    render(<MyPlayListPage />);

    // Check if the left menu is rendered
    const leftMenu = screen.getByTestId("left-menu");
    expect(leftMenu).toBeInTheDocument();

    // Check if the main container is rendered
    const mainContainer = screen.getByTestId("main-container");
    expect(mainContainer).toBeInTheDocument();

    // Check if the background is rendered
    const background = screen.getByTestId("background");
    expect(background).toBeInTheDocument();

    // Check if the footer is rendered
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
