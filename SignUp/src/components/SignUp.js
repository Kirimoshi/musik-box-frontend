import React, { useState } from "react";
import { SignUpFormInput } from "./SignUpFormInput";
import { validate } from "./SignUpValidation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { constants } from "../constants";

export const SignUp = () => {
  const navigate = useNavigate();
  const backendErrors = {
    nicknameExistingError: false,
    emailExistingError: false,
    emailDomainError: false,
  };
  const initialValues = {
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [signUpValues, setSignUpValues] = useState(initialValues);
  const [signUpErrors, setSignUpErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpValues({ ...signUpValues, [name]: value });
  };

  const resetDetails = (name) => {
    setSignUpValues({ ...signUpValues, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUpErrors(validate(signUpValues, backendErrors));
    fetchAPIData();
  };

  const backendErrorsValidate = (errorsArray) => {
    errorsArray.map((element) => {
      if (element === constants.emailDomainErrorElement)
        backendErrors.emailDomainError = true;
      else if (element === constants.emailExistingErrorElement)
        backendErrors.emailExistingError = true;
      if (element === constants.nicknameExistingErrorElement)
        backendErrors.nicknameExistingError = true;
    });
    setSignUpErrors(validate(signUpValues, backendErrors));
  };

  const fetchAPIData = () => {
    const userData = {
      email: signUpValues.email,
      nickname: signUpValues.nickname,
      password: signUpValues.password,
    };
    axios
      .post(constants.API_URL, userData)
      .then(() => {
        navigate("/SignIn");
      })
      .catch((error) => {
        const errorsArray = error.response.data.errors.details;
        backendErrorsValidate(errorsArray);
      });
  };

  return (
    <div className="signup-page">
      <div className="signup-header">
        <header>
          <h1>Sign Up</h1>
        </header>
      </div>
      <div className="signup-details">
        <form className="signup-form" onSubmit={handleSubmit}>
          <SignUpFormInput
            label="Nickname"
            type="text"
            name="nickname"
            value={signUpValues.nickname}
            onChange={handleChange}
            resetDetails={resetDetails}
            signUpErrors={signUpErrors.nickname}
          />
          <SignUpFormInput
            label="Email"
            type="text"
            name="email"
            value={signUpValues.email}
            onChange={handleChange}
            resetDetails={resetDetails}
            signUpErrors={signUpErrors.email}
          />
          <SignUpFormInput
            label="Password"
            type="password"
            name="password"
            value={signUpValues.password}
            onChange={handleChange}
            resetDetails={resetDetails}
            signUpErrors={signUpErrors.password}
          />
          <SignUpFormInput
            label="Password Confirmation"
            type="password"
            name="confirmPassword"
            value={signUpValues.confirmPassword}
            onChange={handleChange}
            resetDetails={resetDetails}
            signUpErrors={signUpErrors.confirmPassword}
          />
          <div className="form-submit">
            <button type="submit" className="submit-button">
              {" "}
              Sign Up
            </button>
            <p className="signin-query">Already have an account?</p>
            <nav>
              <Link to="/SignIn">Sign in</Link>
            </nav>
          </div>
        </form>
      </div>
    </div>
  );
};
