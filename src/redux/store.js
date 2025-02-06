import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import counterReducer from "./reducers/counterReducer";
import themeReducer from "./reducers/themeReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    theme: themeReducer,
  },
});

export default store;
