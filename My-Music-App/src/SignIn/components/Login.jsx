import "../styles/loginstyle.css";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useFormik } from "formik";
import { SignInSchema } from "../schemas/SignInSchema";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { constants } from "../constants";
import { isLoggedIn } from "../../RedirectAuthenticatedUsers/AuthenticatedUsers";

import { useDispatch, useSelector } from "react-redux";
import { setIsRemembered, clearError } from "../../store/user/user.reducer";
import { loginUser } from "../../store/user/user.thunks";
import {
  isAuthenticatedSelector,
  errorSelector,
} from "../../store/user/user.selector";

export function Login(props) {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const loginError = useSelector(errorSelector); // despite error in state is global, in login component it is only login error

  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const onSubmit = () => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    setIsSubmitted(true);
    loginError && dispatch(clearError()); // Clear error from state
    dispatch(loginUser(userData)); // Call login thunk
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    setFieldValue,
    setFieldError,
    setErrors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit,
  });

  const clearFunc = (name) => {
    setFieldValue(name, "");
  };

  // Altering default change handler
  // we need to clear errors and loginError if user is typing and this errors comes from unsuccessful login
  const handleFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    if (isSubmitted && loginError) {
      dispatch(clearError());
      setIsSubmitted(false);
      setErrors({});
    }
    setFieldValue(fieldName, fieldValue);
  };

  // Thunk results handling
  useEffect(() => {
    // TODO: Get possible errors from backend team
    if (loginError) {
      console.error(loginError);
      errors.email = loginError;
      setFieldError(errors.email);
    }
  }, [loginError, errors]);

  useEffect(() => {
    if (isAuthenticated) {
      // alert("You are logged in");
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="header-container">
      <div className="header">
        <span className="header-content" data-testid="signin">
          Sign In
        </span>
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit} autoComplete="on">
          <div className="login-form-inputcheckbox">
            <div className="inputs">
              <div className="label_div_ip1">
                <div
                  className={`input-wrapper ${
                    errors.email && touched.email ? "ip-error" : ""
                  }`}
                >
                  <label
                    htmlFor="inputbox"
                    className={
                      errors.email && touched.email
                        ? "label label-error"
                        : "label"
                    }
                  >
                    Email
                  </label>
                  <input
                    value={values.email}
                    onChange={handleFormChange}
                    className="inputbox"
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    data-testid="emailtest"
                  />
                  {errors.email && touched.email ? (
                    <BsFillExclamationCircleFill className="exclamation-circle" />
                  ) : (
                    <AiOutlineCloseCircle
                      className="close-circle"
                      data-testid="closetest1"
                      onClick={() => clearFunc("email")}
                    />
                  )}
                </div>

                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>
              <div className="label_div_ip1">
                <div
                  className={`input-wrapper ${
                    errors.password && touched.password ? "ip-error" : ""
                  }`}
                >
                  <label
                    htmlFor="password"
                    className={
                      errors.password && touched.password
                        ? "label label-error"
                        : "label"
                    }
                  >
                    Password
                  </label>

                  <input
                    className="inputbox"
                    id="password-label"
                    value={values.password}
                    onChange={handleFormChange}
                    onBlur={handleBlur}
                    name="password"
                    data-testid="passwordtest"
                  />

                  {errors.password && touched.password ? (
                    <BsFillExclamationCircleFill className="exclamation-circle" />
                  ) : (
                    <AiOutlineCloseCircle
                      className="close-circle"
                      data-testid="closetest2"
                      onClick={() => clearFunc("password")}
                    />
                  )}
                </div>

                {errors.password && touched.password && (
                  <p className="error">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="checkbox">
              <div className="checkboxes-dark-parent">
                <input
                  className="checkboxes-dark"
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  onClick={(e) => {
                    dispatch(setIsRemembered(e.target.checked));
                  }}
                />
              </div>

              <label className="checkbox-text" htmlFor="checkbox">
                Remember me
              </label>
            </div>
          </div>

          <div className="sigin-sigup">
            <button
              className={`signin-button ${!isValid ? "signin-error" : ""}`}
              type="submit"
              onClick={onSubmit}
            >
              Sign In
            </button>

            <div className="signin-signup-text">
              <span className="p">Don't have a account yet?</span>

              <nav>
                <Link to="/SignUp" className="signup">
                  Sign Up
                </Link>
              </nav>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
