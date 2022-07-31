import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./count/counter.reducer";
import switchesReducer from "./switches/switches.reducer";

export const store = configureStore({
  reducer: {
    switches: switchesReducer,
    counter: counterReducer
  }
});
