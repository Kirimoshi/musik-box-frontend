import axios from "axios";
import { parse } from "cookie";

export const checkLoggedIn = async (setLoggedIn, navigate) => {
  let logIn = false;
  const cookies = parse(document.cookie);
  let accessToken = localStorage.getItem("accessToken");
  let accessExpiresAt = localStorage.getItem("accessExpiresAt");
  let refreshToken= localStorage.getItem("refreshToken");
  if (accessToken) {
    if (new Date(accessExpiresAt) < Date.now()) {
      console.log("access expired");
      let response;
      try {
        response = await axios.post(
            "http://127.0.0.1:3000/api/v1/refresh",
          null,
          {
            headers: {
              "X-Refresh-Token": `${refreshToken}`
            },
          }
        );
        accessToken = response.data.access;
        accessExpiresAt = response.data.access_expires_at;
        localStorage.setItem('accessToken',accessToken)
        localStorage.setItem('accessExpiresAt',accessExpiresAt)
        if (cookies["accessToken"]) {
          document.cookie = `accessToken=${accessToken}; max-age=${accessExpiresAt}; path=/`;
          document.cookie = `accessExpiresAt=${accessExpiresAt}; path=/`;
        }
        setLoggedIn(true);
        logIn = true;
        navigate("/");
      } catch (error) {
        console.log(error);
        if (
          error.response.data.errors[0].status == 401 &&
          error.response.data.errors[0].detail == "not authorized"
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
      setLoggedIn(true);
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
        response = await axios.post(
            "http://127.0.0.1:3000/api/v1/refresh",
          {
            headers: {
                "X-Refresh-Token": `${refreshToken}`
            },
          }
        );
        accessToken = response.data.access;
        accessExpiresAt = response.data.access_expires_at;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("accessExpiresAt", accessExpiresAt);
        document.cookie = `accessToken=${accessToken}; max-age=${accessExpiresAt}; path=/`;
        document.cookie = `accessExpiresAt=${accessExpiresAt}; path=/`;
        setLoggedIn(true);
        logIn = true;
        navigate("/");
      } catch (error) {
        console.log(error);
        if (
          error.response.data.errors[0].status == 401 &&
          error.response.data.errors[0].detail == "not authorized"
        ) {
          delete cookies["accessToken"];
          delete cookies["accessExpiresAt"];
        }
      }
    } else {
      setLoggedIn(true);
      logIn = true;
      navigate("/");
    }
  }
  if (logIn) {
    alert("You are already signed in.");
    return;
  }
};
