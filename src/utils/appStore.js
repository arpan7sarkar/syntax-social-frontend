import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
//here singluer reducer
export default appStore;

