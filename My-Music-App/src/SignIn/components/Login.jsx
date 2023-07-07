import "../styles/loginstyle.css";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useFormik } from "formik";
import { SignInSchema } from "../schemas/SignInSchema";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { constants } from "../constants";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../RedirectAuthenticatedUsers/AuthenticatedUsers";
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 10000));
  actions.resetForm();
};
export const Login = (props) => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [loggedStatus, setLoggedStatus] = useState(false);
  useEffect(() => {
    isLoggedIn(loggedStatus, setLoggedStatus, navigate);
  }, [loggedStatus, setLoggedStatus, navigate]);
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
    setFieldError,
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
  const post = () => {
  const post = () => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    axios
      .post(constants.API_URL, userData)
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem("accessToken", response.data.access);
          localStorage.setItem("refreshToken", response.data.refresh);
          localStorage.setItem(
            "accessExpiresAt",
            response.data.access_expires_at
          );
          localStorage.setItem(
            "RefreshExpiresAt",
            response.data.refresh_expires_at
          );
          if (rememberMe) {
            document.cookie = `accessToken=${response.data.access}; max-age=${response.data.access_expires_at}; path=/`;
            document.cookie = `accessExpiresAt=${response.data.access_expires_at}; path=/`;
          }
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        const response = error.response.data;
        console.log(response.errors);
        if (response.errors === "Invalid password") {
          errors.password = response.errors;
          setFieldError(errors.password);
          console.log(errors.password);
        } else {
          errors.email = response.errors;
          setFieldError(errors.email);
        console.log(error);
        const response = error.response.data;
        console.log(response.errors);
        if (response.errors === "Invalid password") {
          errors.password = response.errors;
          setFieldError(errors.password);
          console.log(errors.password);
        } else {
          errors.email = response.errors;
          setFieldError(errors.email);
        }
      });
  };
  };

  return (
    <div className="header-container">
      <div className="header">
        <span className="header-content" data-testid="signin">
          Sign In
        </span>
        <span className="header-content" data-testid="signin">
          Sign In
        </span>
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
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
                    onChange={handleChange}
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
        <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    data-testid="passwordtest"
                  />
                  <input
                    className="inputbox"
                    id="password-label"
                    value={values.password}
                    onChange={handleChange}
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
                    setRememberMe(e.target.checked);
                  }}
                />
              </div>

              <label className="checkbox-text" htmlFor="checkbox">
                Remember me
              </label>
            </div>
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
              onClick={post}
            >
              Sign In
            </button>
          <div className="sigin-sigup">
            <button
              className={`signin-button ${!isValid ? "signin-error" : ""}`}
              type="submit"
              onClick={post}
            >
              Sign In
            </button>

            <div className="signin-signup-text">
              <span className="p">Don't have a account yet?</span>
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
};
