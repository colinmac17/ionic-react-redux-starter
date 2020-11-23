import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../features/tabs/tabSlice";

export default configureStore({
  reducer: {
    tabs: tabReducer,
  },
});
