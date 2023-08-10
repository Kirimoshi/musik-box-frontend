/** User slice
 * @type {{loading: boolean, isAuthenticated: boolean, error: null | string, accessToken: null | string, accessExpiresAt: null | string, refreshToken: null | string, refreshExpiresAt: null | string, isRemembered: boolean | null }}
 */
export const userSelector = (state) => state.user;

/** Returns "remember me" flag from sign in page
 * @return {boolean}
 */
export const isRememberedSelector = (state) => state.user.isRemembered;

/** Returns current auth state of user
 * @return {boolean}
 */
export const isAuthenticatedSelector = (state) => state.user.isAuthenticated;

/** Returns error string from state or null if there is no error
 * @return {string | null}
 */
export const errorSelector = (state) => state.user.error;

export const loginErrorSelector = (state) => state.user.loginError;
