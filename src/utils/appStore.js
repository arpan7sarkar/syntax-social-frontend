import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
const appStore = configureStore({
  reducer: { user: userReducer },//this may seem not working but it works fine
});
//here singluer reducer
export default appStore;
