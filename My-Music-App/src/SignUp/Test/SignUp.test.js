import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SignUp } from "../components/SignUp";

describe("Sign Up fields", () => {
  test("Nickname input should be present", () => {
    render(<SignUp />, {
      wrapper: BrowserRouter,
    });
    const nicknameInputElement = screen.getByTestId("nickname");
    expect(nicknameInputElement).toBeInTheDocument();
  });

  test("Email input should be present", () => {
    render(<SignUp />, {
      wrapper: BrowserRouter,
    });
    const emailInputElement = screen.getByTestId("email");
    expect(emailInputElement).toBeInTheDocument();
  });

  test("Password input should be present", () => {
    render(<SignUp />, {
      wrapper: BrowserRouter,
    });
    const passwordInputElement = screen.getByTestId("password");
    expect(passwordInputElement).toBeInTheDocument();
  });

  test("Confirm Password input should be present", () => {
    render(<SignUp />, {
      wrapper: BrowserRouter,
    });
    const confirmPasswordInputElement = screen.getByTestId("confirmPassword");
    expect(confirmPasswordInputElement).toBeInTheDocument();
  });

  test("button should be present", () => {
    render(<SignUp />, {
      wrapper: BrowserRouter,
    });
    const submitButtonElement = screen.getByRole("button", {
      name: "Sign Up",
    });
    expect(submitButtonElement).toBeInTheDocument();
  });
});

describe("Clear Button Functionality", () => {
  test("Clear nickname button should clear the nickname field", () => {
    render(<SignUp />, {
      wrapper: BrowserRouter,
    });
    const nicknameInput = screen.getByTestId("nickname");
    fireEvent.change(nicknameInput, { target: { value: "saiprakash" } });
    const nicknameInputClearElement = screen.getByTestId("nicknameClear");
    fireEvent.click(nicknameInputClearElement);
    expect(nicknameInput.value).toBe("");
  });

  test("Clear email button should clear the email field", () => {
    render(<SignUp />, {
      wrapper: BrowserRouter,
    });
    const emailInput = screen.getByTestId("email");
    fireEvent.change(emailInput, {
      target: { value: "saiprakash845@gmail.com" },
    });
    const emailInputClearElement = screen.getByTestId("emailClear");
    fireEvent.click(emailInputClearElement);
    expect(emailInput.value).toBe("");
  });

  test("Clear password button should clear the password field", () => {
    render(<SignUp />, {
      wrapper: BrowserRouter,
    });
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "Sai@012345" } });
    const passwordInputClearElement = screen.getByTestId("passwordClear");
    fireEvent.click(passwordInputClearElement);
    expect(passwordInput.value).toBe("");
  });

  test("Clear confirm password button should clear the confirm password field", () => {
    render(<SignUp />, {
      wrapper: BrowserRouter,
    });
    const confirmPasswordInput = screen.getByTestId("confirmPassword");
    fireEvent.change(confirmPasswordInput, { target: { value: "Sai@012345" } });
    const confirmPasswordInputClearElement = screen.getByTestId(
      "confirmPasswordClear"
    );
    fireEvent.click(confirmPasswordInputClearElement);
    expect(confirmPasswordInput.value).toBe("");
  });
});

describe("Sign Up Validations", () => {
  beforeEach(() => {
    render(<SignUp />, {
      wrapper: BrowserRouter,
    });
    const nicknameInput = screen.getByTestId("nickname");
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const confirmPasswordInput = screen.getByTestId("confirmPassword");
    fireEvent.change(nicknameInput, { target: { value: "dummy" } });
    fireEvent.change(emailInput, { target: { value: "dummy" } });
    fireEvent.change(passwordInput, { target: { value: "dummy" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "dummy" } });
  });
  test("Nickname should be minimum of three characters", () => {
    const nicknameInput = screen.getByTestId("nickname");
    fireEvent.change(nicknameInput, { target: { value: "s" } });
    const submitButtonElement = screen.getByRole("button", {
      name: "Sign Up",
    });
    fireEvent.click(submitButtonElement);
    const nicknameInputErrorElement = screen.getByTestId("nicknameError");
    expect(nicknameInputErrorElement.innerHTML).toBe(
      "Please enter the nickname that includes between 3 and 50 characters."
    );
  });

  test("Email Should be without any spaces and special characters", () => {
    const emailInput = screen.getByTestId("email");
    fireEvent.change(emailInput, {
      target: { value: "sai prakash845@gmail.com" },
    });
    const submitButtonElement = screen.getByRole("button", {
      name: "Sign Up",
    });
    fireEvent.click(submitButtonElement);
    const emailInputErrorElement = screen.getByTestId("emailError");
    expect(emailInputErrorElement.innerHTML).toBe(
      "Please enter a valid email address without any spaces or special characters."
    );
  });

  test("Password should contain atleast one special character", () => {
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "Sai012345" } });
    const submitButtonElement = screen.getByRole("button", {
      name: "Sign Up",
    });
    fireEvent.click(submitButtonElement);
    const passwordInputErrorElement = screen.getByTestId("passwordError");
    expect(passwordInputErrorElement.innerHTML).toBe(
      "Please enter a password that includes at least one special character."
    );
  });

  test("Password should contain atleast one lower case letter", () => {
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "SAI@012345" } });
    const submitButtonElement = screen.getByRole("button", {
      name: "Sign Up",
    });
    fireEvent.click(submitButtonElement);
    const passwordInputErrorElement = screen.getByTestId("passwordError");
    expect(passwordInputErrorElement.innerHTML).toBe(
      "Please enter a password that includes at least one lowercase letter."
    );
  });

  test("Password should contain atleast one upper case letter", () => {
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "sai@012345" } });
    const submitButtonElement = screen.getByRole("button", {
      name: "Sign Up",
    });
    fireEvent.click(submitButtonElement);
    const passwordInputErrorElement = screen.getByTestId("passwordError");
    expect(passwordInputErrorElement.innerHTML).toBe(
      "Please enter a password that includes at least one uppercase letter."
    );
  });

  test("Password should contain atleast one digit", () => {
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "S@iPrakash" } });
    const submitButtonElement = screen.getByRole("button", {
      name: "Sign Up",
    });
    fireEvent.click(submitButtonElement);
    const passwordInputErrorElement = screen.getByTestId("passwordError");
    expect(passwordInputErrorElement.innerHTML).toBe(
      "Please enter a password that includes at least one number."
    );
  });
  test("Confirm Password should be same as password", () => {
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "Sai@012345" } });
    const confirmPasswordInput = screen.getByTestId("confirmPassword");
    fireEvent.change(confirmPasswordInput, { target: { value: "sai@012345" } });
    const submitButtonElement = screen.getByRole("button", {
      name: "Sign Up",
    });
    fireEvent.click(submitButtonElement);
    const confirmPasswordErrorElement = screen.getByTestId(
      "confirmPasswordError"
    );
    expect(confirmPasswordErrorElement.innerHTML).toBe(
      "The passwords you entered do not match. Please try again."
    );
  });
});
