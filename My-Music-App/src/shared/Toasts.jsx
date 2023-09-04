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

// helper
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

export function LogoutPendingMessage() {
  return (
    <ToatsMsg className="toast__logout--pending">
      <p>Logging out...</p>
    </ToatsMsg>
  );
}
export function LogoutSuccessMessage() {
  return (
    <ToatsMsg className="toast__logout--success">
      <p>You have been successfully logged out.</p>
      <p>Come back anytime!</p>
    </ToatsMsg>
  );
}

export function LogoutErrorMessage() {
  return (
    <ToatsMsg className="toast__logout--error">
      <p>Sorry, we encountered an error while logging you out.</p>
      <p>Please try again later.</p>
    </ToatsMsg>
  );
}

export function LoginSuccessMessage() {
  return (
    <ToatsMsg className="toast__login--success">
      <p>You have been successfully logged in.</p>
      <p>Welcome back!</p>
    </ToatsMsg>
  );
}

export function PlaylistTypeChangePendingMessage() {
  return (
    <ToatsMsg className="toast__playlist-type-change--pending">
      <p>Changing playlist type...</p>
    </ToatsMsg>
  );
}

export function PlaylistTypeChangeSuccessMessage() {
  return (
    <ToatsMsg className="toast__playlist-type-change--success">
      <p>Playlist type has been successfully changed.</p>
    </ToatsMsg>
  );
}

export function PlaylistTypeChangeErrorMessage() {
  return (
    <ToatsMsg className="toast__playlist-type-change--error">
      <p>Oops, looks like something went wrong.</p>
      <p>Please try again later.</p>
    </ToatsMsg>
  );
}
