import React, { useState, useEffect } from "react";
import SignUpFormInput from "./SignUpFormInput";
import { validate } from "./SignUpValidation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign-up-styles.css";
import { constants } from "./constants";
import { isLoggedIn } from "../../RedirectAuthenticatedUsers/AuthenticatedUsers";
import paths from "../../router/paths";

function SignUp() {
  const navigate = useNavigate();
  const backendErrors = {
    nicknameExistingError: false,
    emailExistingError: false,
    emailDomainError: false,
    emailInvalidError: false,
  };
  const initialValues = {
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [signUpValues, setSignUpValues] = useState(initialValues);
  const [signUpErrors, setSignUpErrors] = useState({});
  const [disableButton, setDisableButton] = useState(1);
  const [loggedStatus, setLoggedStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpValues({ ...signUpValues, [name]: value });
  };

  const resetDetails = (name) => {
    setSignUpValues({ ...signUpValues, [name]: "" });
    setSignUpErrors({ ...signUpErrors, [name]: "" });
  };

  useEffect(() => {
    isLoggedIn(loggedStatus, setLoggedStatus, navigate);
  }, [loggedStatus, setLoggedStatus, navigate]);

  useEffect(() => {
    if (
      signUpValues.nickname &&
      signUpValues.email &&
      signUpValues.password &&
      signUpValues.confirmPassword
    )
      setDisableButton(0);
    else setDisableButton(1);
  }, [
    signUpValues.nickname,
    signUpValues.email,
    signUpValues.password,
    signUpValues.confirmPassword,
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUpErrors(validate(signUpValues, backendErrors));
    fetchAPIData();
  };

  const backendErrorsValidate = (errorsArray) => {
    // TODO: Refactor this function, forEach is preferable way here
    // eslint-disable-next-line array-callback-return
    errorsArray.map((element) => {
      if (element === constants.emailDomainErrorElement)
        backendErrors.emailDomainError = true;
      else if (element === constants.emailExistingErrorElement)
        backendErrors.emailExistingError = true;
      else if (element === constants.emailInvalidErrorElement)
        backendErrors.emailInvalidError = true;
      if (element === constants.nicknameExistingErrorElement)
        backendErrors.nicknameExistingError = true;
    });
    setSignUpErrors(validate(signUpValues, backendErrors));
  };

  const fetchAPIData = () => {
    const userData = {
      user: {
        email: signUpValues.email,
        nickname: signUpValues.nickname,
        password: signUpValues.password,
        password_confirmation: signUpValues.confirmPassword,
      },
    };
    axios
      .post(constants.API_URL, userData)
      .then(() => {
        navigate(paths.signIn);
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
          <p>Sign Up</p>
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
            <button
              id="submit-confirm"
              type="submit"
              disabled={disableButton}
              className={
                disableButton ? "submit-disable-button" : "submit-button"
              }
            >
              {" "}
              Sign Up
            </button>
            <p className="signin-query">Already have an account?</p>
            <nav>
              <Link to={paths.signIn}>Sign in</Link>
            </nav>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
