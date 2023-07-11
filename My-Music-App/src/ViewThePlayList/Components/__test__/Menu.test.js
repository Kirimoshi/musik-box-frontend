import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "../Menu";

describe("Menu component", () => {
  const menuObject = [
    { icon: "icon1", name: "Menu 1" },
    { icon: "icon2", name: "Menu 2" },
    { icon: "icon3", name: "Menu 3" },
  ];

  test("renders the menu items and highlights the selected item", () => {
    render(<Menu menuObject={menuObject} />);

    const menuItems = screen.getAllByRole("listitem");

    // Check if menu items are rendered correctly
    expect(menuItems).toHaveLength(menuObject.length);

    menuItems.forEach((menuItem, index) => {
      const menuLink = menuItem.querySelector("a");
      const listIcon = menuItem.querySelector(".list_icon");
      const listName = menuItem.querySelector(".list_name");

      // Check if the menu link contains the correct text
      expect(menuLink).toHaveTextContent(menuObject[index].name);

      // Check if the menu link has the correct class when not selected
      expect(menuLink).not.toHaveClass("highlighted-button");

      // Check if the list icon contains the correct text
      expect(listIcon).toHaveTextContent(menuObject[index].icon);

      // Check if the list name contains the correct text
      expect(listName).toHaveTextContent(menuObject[index].name);
    });

    // Click on the second menu item
    const secondMenuItem = menuItems[1].querySelector("a");
    fireEvent.click(secondMenuItem);

    // Check if the second menu item is highlighted
    expect(secondMenuItem).toHaveClass("highlighted-button");
  });
});
