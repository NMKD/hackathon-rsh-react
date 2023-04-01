import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users";

const rootReducer = combineReducers({
    users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer
});
