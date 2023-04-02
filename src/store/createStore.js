import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users";
import { qualitiesReducer } from "./qualities";
import { socialReducer } from "./social";
import { progressReducer } from "./progress";

const rootReducer = combineReducers({
  users: usersReducer,
  qualities: qualitiesReducer,
  social: socialReducer,
  progress: progressReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
