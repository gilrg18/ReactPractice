import { configureStore } from "@reduxjs/toolkit";
//counterReducer and authReducer are alias for the default exports
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});


export default store;
