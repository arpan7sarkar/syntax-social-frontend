import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import feedReducer from "./feedSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed:feedReducer,
  },
});
//here singluer reducer
export default appStore;

