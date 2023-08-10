import React from "react";
import PropTypes from "prop-types";
import { ToatsMsg } from "./Toasts.styles";
// configs
export const baseToastConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// messages

export function OneLineMessage({ message }) {
  return (
    <ToatsMsg>
      <p>{message}</p>
    </ToatsMsg>
  );
}
OneLineMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export function LogoutPendigMessage() {
  return (
    <ToatsMsg>
      <p>Logging out...</p>
    </ToatsMsg>
  );
}
export function LogoutSuccessMessage() {
  return (
    <ToatsMsg>
      <p>You have been successfully logged out</p>
      <p>Come back anytime!</p>
    </ToatsMsg>
  );
}

export function LogoutErrorMessage() {
  return (
    <ToatsMsg>
      <p>Something went wrong</p>
      <p>Please try again</p>
    </ToatsMsg>
  );
}

export function LoginSuccessMessage() {
  return (
    <ToatsMsg>
      <p>You have been successfully logged in</p>
      <p>Welcome back!</p>
    </ToatsMsg>
  );
}
