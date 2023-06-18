import { render, screen,fireEvent } from '@testing-library/react';
import {Login} from '../Login';
test('should render same text as given', () => {
  render(<Login/>);
  const headingElement = screen.getByText(/Sign In./i);
  expect(headingElement).toBeInTheDocument();

});

it('heading should be rendered', () => {
    render(<Login/>);
    const headingElement2 = screen.getByRole("heading",{name:"Sign In."});
    expect(headingElement2).toBeInTheDocument();
});

test('email text should be rendered', () => {
    render(<Login/>);
    const emailElement = screen.getByTestId(/emaile/i);
  expect(emailElement).toBeInTheDocument();

});

it('pass should be rendered', () => {
    render(<Login/>);
    const passwordElement = screen.getByTestId(/passwordp/i);
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
    const inputElement = screen.getByTestId(/emaile/i)
    fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });
    expect(inputElement.value).toBe('Hello, World!');
});


test('should update password input value', () => {
    render(<Login />);
    const passwordInput = screen.getByTestId('passwordp');
    fireEvent.change(passwordInput, { target: { value: 'mypassword' } });
    expect(passwordInput.value).toBe('mypassword');
  });



  it('should render the icon component', () => {
    render(<Login />);
    const iconElement = screen.getByTestId('closei')
    expect(iconElement).toBeInTheDocument();
  });
  

  
  test('should call myFunction and clear email', () => {
    const myFunctionMock = jest.fn();
    render(<Login clearfunc={myFunctionMock} />);
    const iconElement = screen.getByTestId('closei');
    fireEvent.click(iconElement);
    expect(myFunctionMock).toHaveBeenCalled();
  });

  test('should call myFunction when icon is clicked', () => {
    const myFunctionMock = jest.fn();
    render(<Login clearfunc={myFunctionMock} />);
    const iconElement = screen.getByTestId('closeu');
    fireEvent.click(iconElement);
    expect(myFunctionMock).toHaveBeenCalled();
  });



