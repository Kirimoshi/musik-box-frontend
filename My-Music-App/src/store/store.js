// import { compose } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

//TODO add redux dev tools

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // Enable DevTools in non-production environments
});
