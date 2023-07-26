import axios from "axios";
import { parse } from "cookie";
import { constants } from "./constants";

export const isLoggedIn = async (loggedStatus, setLoggedStatus, navigate) => {
  let logIn = false;
  const cookies = parse(document.cookie);
  let accessToken = localStorage.getItem("accessToken");
  let accessExpiresAt = localStorage.getItem("accessExpiresAt");
  let refreshToken = localStorage.getItem("refreshToken");
  if (accessToken) {
    if (new Date(accessExpiresAt) < Date.now()) {
      let response;
      try {
        response = await axios.post(constants.refreshURL, null, {
          headers: {
            "X-Refresh-Token": `${refreshToken}`,
          },
        });
        accessToken = response.data.access;
        accessExpiresAt = response.data.access_expires_at;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("accessExpiresAt", accessExpiresAt);
        if (cookies["accessToken"]) {
          document.cookie = `accessToken=${accessToken}; max-age=${accessExpiresAt}; path=/`;
          document.cookie = `accessExpiresAt=${accessExpiresAt}; path=/`;
        }
        setLoggedStatus(true);
        logIn = true;
        navigate("/");
      } catch (error) {
        if (
          error.response.data.errors[0].status &&
          error.response.data.errors[0].status === 401 &&
          error.response.data.errors[0].detail === "not authorized"
        ) {
          localStorage.removeItem(accessToken);
          localStorage.removeItem(accessExpiresAt);
          if (cookies["accessToken"]) {
            delete cookies["accessToken"];
            delete cookies["accessExpiresAt"];
          }
        }
      }
    } else {
      setLoggedStatus(true);
      logIn = true;
      navigate("/");
    }
  }
  if (logIn) {
    alert("You are already signed in.");
    return;
  }
  accessToken = cookies["accessToken"];
  if (accessToken) {
    const accessExpiresAt = cookies["accessExpiresAt"];
    if (new Date(accessExpiresAt) < Date.now()) {
      let response;
      try {
        response = await axios.post(constants.refreshURL, {
          headers: {
            "X-Refresh-Token": `${refreshToken}`,
          },
        });
        accessToken = response.data.access;
        accessExpiresAt = response.data.access_expires_at;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("accessExpiresAt", accessExpiresAt);
        document.cookie = `accessToken=${accessToken}; max-age=${accessExpiresAt}; path=/`;
        document.cookie = `accessExpiresAt=${accessExpiresAt}; path=/`;
        setLoggedStatus(true);
        logIn = true;
        navigate("/");
      } catch (error) {
        if (
          error.response.data.errors[0].status &&
          error.response.data.errors[0].status == 401 &&
          error.response.data.errors[0].detail == "not authorized"
        ) {
          delete cookies["accessToken"];
          delete cookies["accessExpiresAt"];
        }
      }
    } else {
      setLoggedStatus(true);
      logIn = true;
      navigate("/");
    }
  }
  if (logIn) {
    alert("You are already signed in.");
    return;
  }
};
