import { configureStore } from "@reduxjs/toolkit";
import darkMode from "./DataShare";

const store = configureStore({
  reducer: {
    toggleDark: darkMode,
  },
});

export default store;
