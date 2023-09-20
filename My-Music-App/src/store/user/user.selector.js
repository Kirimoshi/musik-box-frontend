import { createSelector } from "@reduxjs/toolkit";
const userSlice = (state) => state.user;

/** User slice
 * @type {{loading: boolean, isAuthenticated: boolean, error: null | string, accessToken: null | string, accessExpiresAt: null | string, refreshToken: null | string, refreshExpiresAt: null | string, isRemembered: boolean | null }}
 */
export const userSelector = createSelector(userSlice, (user) => user);

/** Returns "remember me" flag from sign in page
 * @return {boolean}
 */
export const isRememberedSelector = createSelector(
  userSlice,
  (user) => user.isRemembered
);

/** Returns current auth state of user
 * @return {boolean}
 */
export const isAuthenticatedSelector = createSelector(
  userSlice,
  (user) => user.isAuthenticated
);

/** Returns error string from state or null if there is no error
 * @return {string | null}
 */
export const errorSelector = createSelector(userSlice, (user) => user.error);

export const loginErrorSelector = createSelector(
  userSlice,
  (user) => user.loginError
);
