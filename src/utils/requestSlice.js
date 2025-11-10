import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  // default to empty array so components can safely map()
  initialState: [],
  reducers: {
    addRequest: (state, action) => {
      // replace state with payload (expected array)
      return action.payload || [];
    },
    removeRequest: (state, action) => {
      const userId = action.payload;
      const newState = state.filter((item) => item._id !== userId);
      return newState;
    },
  },
});
export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
