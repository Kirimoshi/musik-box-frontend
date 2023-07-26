import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_URL } from "../constants";

/** Login Thunk. Accepts user login data and returns a promise with user data.
 * @param {Object} userData - user login data as object {email, password}
 */
export const loginUser = createAsyncThunk("user/login", async (userData) => {
  try {
    const response = await axios.post(LOGIN_URL, userData);
    console.log("response:", response.data);
    return response.data;
  } catch (error) {
    throw error.response.data.errors;
  }
});

/** Initial state of user slice
 * @type {{loading: boolean, isAuthenticated: boolean, error: null | string, accessToken: null | string, accessExpiresAt: null | string, refreshToken: null | string, refreshExpiresAt: null | string, isRemembered: boolean }}
 */
const INITIAL_STATE = {
  loading: false,
  isAuthenticated: false,
  error: null,
  accessToken: null,
  accessExpiresAt: null,
  refreshToken: null,
  refreshExpiresAt: null,
  isRemembered: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  // synchronous reducers
  reducers: {
    setIsRemembered: (state, action) => {
      state.isRemembered = action.payload;
    },
  },
  // asynchronous reducers
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        // currently implementation also depends on locals state, so besides of state update we also need to update localStorage
        state.accessToken = action.payload.access;
        localStorage.setItem("accessToken", state.accessToken);

        state.accessExpiresAt = action.payload.access_expires_at;
        localStorage.setItem("accessExpiresAt", state.accessExpiresAt);

        state.refreshToken = action.payload.refresh;
        localStorage.setItem("refreshToken", state.refreshToken);

        state.refreshExpiresAt = action.payload.refresh_expires_at;
        localStorage.setItem("RefreshExpiresAt", state.refreshExpiresAt);

        // if user selected "remember me" option, we need to store access token in cookies
        document.cookie = `accessToken=${state.accessToken}; max-age=${state.accessExpiresAt}; path=/`;
        document.cookie = `accessExpiresAt=${state.accessExpiresAt}; path=/`;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.error.message;
      });
  },
});

export const { setIsRemembered } = userSlice.actions;

export const userReducer = userSlice.reducer;
