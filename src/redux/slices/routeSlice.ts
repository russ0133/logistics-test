import { createSlice } from "@reduxjs/toolkit";

export const routeSlice = createSlice({
  name: "routes",
  initialState: {
    selected: null,
  },
  reducers: {
    set: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { set } = routeSlice.actions;

export const selectedRoute = (state: any) => state.routes.selected;

export default routeSlice.reducer;
