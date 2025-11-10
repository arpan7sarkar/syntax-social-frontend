import { createSlice } from "@reduxjs/toolkit";

const connectionStatusSlice = createSlice({
  name: "connectionStatus",
  initialState: null,
  reducers: {
    addConnectionStatus: (state, action) => {
      return action.payload;
    },
    removeConnectionStatus: (state, action) => null,
  },
});
export const {addConnectionStatus,removeConnectionStatus}=connectionStatusSlice.actions;
export default connectionStatusSlice.reducer;