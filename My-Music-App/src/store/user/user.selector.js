/** Returns "remember me" flag from sign in page
 * @return {boolean}
 */
export const isRememberedSelector = (state) => state.user.isRemembered;

/** Returns current auth state of user
 * @return {boolean}
 */
export const isAuthenticatedSelector = (state) => state.user.isAuthenticated;

/** Returns auth error string from state or null if there is no error
 * @return {string | null}
 */
export const errorSelector = (state) => state.user.error;
