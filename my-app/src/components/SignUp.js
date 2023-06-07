import React, { useState } from 'react';
import { SignUpFormInput } from './SignUpFormInput';
import { validate } from './SignUpValidation';

export const SignUp = () => {
  const initialValues = { nickname: '', email: '', password: '', confirmPassword: '' };
  const [signUpValues, setSignUpValues] = useState(initialValues);
  const [signUpErrors, setSignUpErrors] = useState({});
  // const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpValues({ ...signUpValues, [name]: value });
  };

  const resetDetails = (name) => {
    setSignUpValues({ ...signUpValues, [name]: '' });
    setSignUpErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUpErrors(validate(signUpValues));
    // setIsSignUp(true);
  };

  return (
        <div className='signup-page'>
            <div className="signup-header">
                <header>
                    <h1>Sign Up</h1>
                </header>
            </div>
            <div className='signup-details'>
                <form className='signup-form' onSubmit={handleSubmit}>
                    <SignUpFormInput label='Nickname' type='text' name='nickname' value={signUpValues.nickname} onChange={handleChange} resetDetails={resetDetails} signUpErrors={signUpErrors.nickname}/>
                    <SignUpFormInput label='Email' type='text' name='email' value={signUpValues.email} onChange={handleChange} resetDetails={resetDetails} signUpErrors={signUpErrors.email}/>
                    <SignUpFormInput label='Password' type='password' name='password' value={signUpValues.password} onChange={handleChange} resetDetails={resetDetails} signUpErrors={signUpErrors.password}/>
                    <SignUpFormInput label='Password Confirmation' type='password' name='confirmPassword' value={signUpValues.confirmPassword} onChange={handleChange} resetDetails={resetDetails} signUpErrors={signUpErrors.confirmPassword}/>
                    <div className="form-submit">
                        <button type='submit' className='submit-button'> Sign Up</button>
                        <p className="signin-query">Already have an account?</p>
                        <a href="">Sign in</a>
                    </div>
                </form>
            </div>
        </div>
  );
};
