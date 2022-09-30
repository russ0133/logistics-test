import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./slices/routeSlice";

export default configureStore({
  reducer: {
    routes: routeReducer,
  },
});
