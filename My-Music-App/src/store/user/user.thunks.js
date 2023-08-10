import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_URL, REFRESH_URL, LOGOUT_URL } from "../constants";

// helpers
const setUpCookie = (cookieName, cookieValue, cookieExpiresAt) => {
  document.cookie = `${cookieName}=${cookieValue}; max-age=${cookieExpiresAt}; path=/ SameSite=Strict; Secure`;
};
const deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}=; max-age=0; path=/ SameSite=Strict; Secure`;
};
// helper to stringify and store objects in localStorage
const setLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const cleanLocalStorage = () => {
  [
    "accessToken",
    "accessExpiresAt",
    "refreshToken",
    "refreshExpiresAt",
    "isRemembered",
  ].forEach((key) => localStorage.removeItem(key)); // i prefer do not use .clear() method, because it will delete all
};

/** Login Thunk. Accepts user login data and returns a promise with user data.
 * @param {Object} userData - user login data as object {email, password}
 */
export const loginUser = createAsyncThunk("user/login", async (userData) => {
  try {
    const response = await axios.post(LOGIN_URL, userData);
    return response.data; // transferred to loginUserFulfilled action.payload
  } catch (error) {
    throw error.response.data.errors; // transferred to loginUserRejected action.error
  }
});

export const loginUserPending = (state) => {
  state.loading = true;
  state.isAuthenticated = false;
  state.loginError = null;
};

export const loginUserFulfilled = (state, action) => {
  state.loading = false;
  // update state from form data, note: rememberMe already in state
  state.isAuthenticated = true;
  state.accessToken = action.payload.access;
  state.accessExpiresAt = action.payload.access_expires_at;
  state.refreshToken = action.payload.refresh;
  state.refreshExpiresAt = action.payload.refresh_expires_at;
  // update localStorage and cookies
  setLocalStorage("accessToken", state.accessToken);
  setLocalStorage("accessExpiresAt", state.accessExpiresAt);
  setLocalStorage("refreshToken", state.refreshToken);
  setLocalStorage("refreshExpiresAt", state.refreshExpiresAt);
  setLocalStorage("isRemembered", state.isRemembered);

  // TODO: cookie-remove, cookies is unnecessary, we dont use them for any info storage, only as flag to "remember me" user answer
  // i transfered the flag to localStorage
  // before if user selected "remember me" option, we stored access token in cookies
  setUpCookie("accessToken", state.accessToken, state.accessExpiresAt);
  setUpCookie("accessExpiresAt", state.accessExpiresAt, state.accessExpiresAt);
};

export const loginUserRejected = (state, action) => {
  state.loading = false;
  state.isAuthenticated = false;
  state.loginError = action.error.message;
};

// Refrehs User auth token Thunk
export const refreshUser = createAsyncThunk(
  "user/refreshAuth",
  async (_, { getState }) => {
    const refreshToken = getState().user.refreshToken;
    try {
      const response = await axios.post(REFRESH_URL, null, {
        headers: {
          "X-Refresh-Token": `${refreshToken}`,
        },
      });
      return response.data; // transferred to refreshTokenFulfilled action.payload
    } catch (error) {
      throw error.response.data.errors; // transferred to refreshTokenRejected action.error
    }
  }
);
// TODO: pending status same as login, maybe we can use the same reducer
export const refreshUserPending = (state) => {
  state.loading = true;
  state.isAuthenticated = false;
  state.error = null;
};
export const refreshUserFulfilled = (state, action) => {
  state.loading = false;
  // update state
  state.isAuthenticated = true;
  state.accessToken = action.payload.access;
  state.accessExpiresAt = action.payload.access_expires_at;
  // update localStorage and cookies
  setLocalStorage("accessToken", state.accessToken);
  setLocalStorage("accessExpiresAt", state.accessExpiresAt);
  // look at the comment above "TODO: cookie-remove", we dont need to store cookies
  setUpCookie("accessToken", state.accessToken, state.accessExpiresAt);
  setUpCookie("accessExpiresAt", state.accessExpiresAt, state.accessExpiresAt);
};
export const refreshUserRejected = (state, action) => {
  // update state
  state.loading = false;
  state.isAuthenticated = false;
  state.error = action.error;
  // if there is auth error, we need to delete all cookies and localStorage
  deleteCookie("accessToken");
  deleteCookie("accessExpiresAt");

  cleanLocalStorage();
};

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (messageObj, { getState }) => {
    const accessToken = getState().user.accessToken;
    const headersList = {
      Accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
    };

    const reqOptions = {
      url: `${LOGOUT_URL}`,
      method: "DELETE",
      headers: headersList,
    };
    try {
      const response = await axios.request(reqOptions);
      return response.data;
    } catch (error) {
      throw error.response.data.errors;
    }
  }
);
export const logoutUserPending = (state, action) => {
  state.loading = true;
  state.error = null;
};
export const logoutUserFulfilled = (state, action) => {
  state.loading = false;
  state.isAuthenticated = false;
  state.accessToken = null;
  state.accessExpiresAt = null;
  state.refreshToken = null;
  state.refreshExpiresAt = null;
  state.isRemembered = false;
  cleanLocalStorage();
};
export const logoutUserRejected = (state, action) => {
  state.loading = false;
  state.error = action.error;
};
