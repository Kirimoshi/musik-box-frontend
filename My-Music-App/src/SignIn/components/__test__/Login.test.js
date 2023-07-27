import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../Login";
test("should render same text as given", () => {
  render(<Login />, {
    wrapper: BrowserRouter,
  });
  const headingElement = screen.getByTestId(/signin/i);
  expect(headingElement).toBeInTheDocument();
});
it("heading should be rendered", () => {
  render(<Login />, {
    wrapper: BrowserRouter,
  });
  const headingElement2 = screen.getByTestId("signin");
  expect(headingElement2).toBeInTheDocument();
});
test("email text should be rendered", () => {
  render(<Login />, {
    wrapper: BrowserRouter,
  });
  const emailElement = screen.getByTestId(/emailtest/i);
  expect(emailElement).toBeInTheDocument();
});
it("pass should be rendered", () => {
  render(<Login />, {
    wrapper: BrowserRouter,
  });
  const passwordElement = screen.getByTestId(/passwordtest/i);
  expect(passwordElement).toBeInTheDocument();
});
it("should render singup page", () => {
  render(<Login />, {
    wrapper: BrowserRouter,
  });
  const signupElement = screen.getByRole("link", { name: "Sign Up" });
  expect(signupElement).toBeInTheDocument();
});
it("should render input element", () => {
  render(<Login />, {
    wrapper: BrowserRouter,
  });
  const inputElement = screen.getByTestId(/emailtest/i);
  fireEvent.change(inputElement, { target: { value: "Hello, World!" } });
  expect(inputElement.value).toBe("Hello, World!");
});
test("should update password input value", () => {
  render(<Login />, {
    wrapper: BrowserRouter,
  });
  const passwordInput = screen.getByTestId("passwordtest");
  fireEvent.change(passwordInput, { target: { value: "mypassword" } });
  expect(passwordInput.value).toBe("mypassword");
});
it("should render the icon component", () => {
  render(<Login />, {
    wrapper: BrowserRouter,
  });
  const iconElement = screen.getByTestId("closetest1");
  expect(iconElement).toBeInTheDocument();
});
test("Clear email button should clear the email field", () => {
  render(<Login />, {
    wrapper: BrowserRouter,
  });
  const emailInput = screen.getByTestId("emailtest");
  fireEvent.change(emailInput, {
    target: { value: "bhaskara@gmail.com" },
  });
  const emailInputClearElement = screen.getByTestId("closetest1");
  fireEvent.click(emailInputClearElement);
  expect(emailInput.value).toBe("");
});
test("Clear password button should clear the password field", () => {
  render(<Login />, {
    wrapper: BrowserRouter,
  });
  const passwordInput = screen.getByTestId("passwordtest");
  fireEvent.change(passwordInput, { target: { value: "Bhaskara@61552" } });
  const passwordInputClearElement = screen.getByTestId("closetest2");
  fireEvent.click(passwordInputClearElement);
  expect(passwordInput.value).toBe("");
});
describe("Clear Button Functionality", () => {
  test("Clear email", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const emailInput = screen.getByTestId("emailtest");
    fireEvent.change(emailInput, { target: { value: "bhaskara@epam.com" } });
    const emailInputClearElement = screen.getByTestId("closetest1");
    fireEvent.click(emailInputClearElement);
    expect(emailInput.value).toBe("");
  });
});
