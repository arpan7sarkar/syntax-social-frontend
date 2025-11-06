import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice"
import requestReducer from "./requestSlice"
import connectionStatusReducer from "./connectionStatusSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed:feedReducer,
    connections:connectionReducer,
    connectionStatus:connectionStatusReducer,
    request:requestReducer,
    
  },
});
//here singluer reducer
export default appStore;

