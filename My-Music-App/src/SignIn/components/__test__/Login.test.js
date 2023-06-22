import { render, screen,fireEvent } from '@testing-library/react';
import {Login} from '../Login';
test('should render same text as given', () => {
  render(<Login/>);
  const headingElement = screen.getByTestId(/signin/i);
  expect(headingElement).toBeInTheDocument();
});
it('heading should be rendered', () => {
    render(<Login/>);
    const headingElement2 = screen.getByRole("heading",{name:"Sign In"});
    expect(headingElement2).toBeInTheDocument();
});
test('email text should be rendered', () => {
    render(<Login/>);
    const emailElement = screen.getByTestId(/emailtest/i);
  expect(emailElement).toBeInTheDocument();
});
it('pass should be rendered', () => {
    render(<Login/>);
    const passwordElement = screen.getByTestId(/passwordtest/i);
    expect(passwordElement).toBeInTheDocument();
});
it('all headings should be rendered', () => {
    render(<Login/>);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2)
});
it('should render singup page', () => {
    render(<Login/>);
    const signupElement = screen.getByRole("button",{name:"sign up"})
    expect(signupElement).toBeInTheDocument();
});
it('should render input element', () => {
    render(<Login/>);
    const inputElement = screen.getByTestId(/emailtest/i)
    fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });
    expect(inputElement.value).toBe('Hello, World!');
});
test('should update password input value', () => {
    render(<Login />);
    const passwordInput = screen.getByTestId('passwordtest');
    fireEvent.change(passwordInput, { target: { value: 'mypassword' } });
    expect(passwordInput.value).toBe('mypassword');
  });
  it('should render the icon component', () => {
    render(<Login />);
    const iconElement = screen.getByTestId('closetest1')
    expect(iconElement).toBeInTheDocument();
  });
  test('should call myFunction when email button is clicked', () => {
    const myFunctionMock = jest.fn();
    render(<Login clearFunc={myFunctionMock} />);
    const buttonElement = screen.getByTestId('closetest1');
    fireEvent.click(buttonElement);
    expect(myFunctionMock).toHaveBeenCalled();
  });
  test('should call clearFunc when pass button is clicked', () => {
    const myFunctionMock = jest.fn();
    render(<Login clearFunc={myFunctionMock}/>);
    const buttonElement = screen.getByTestId('closetest2');
    fireEvent.click(buttonElement);
    expect(myFunctionMock).toHaveBeenCalledTimes(1);
  });
  test("Clear email button should clear the email field", () => {
    render(<Login />, {
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
      });
      const emailInput = screen.getByTestId("emailtest");
      fireEvent.change(emailInput, { target: { value: "bhaskara@epam.com" } });
      const emailInputClearElement = screen.getByTestId("closetest1");
      fireEvent.click(emailInputClearElement);
      expect(emailInput.value).toBe("");
    });
  })
