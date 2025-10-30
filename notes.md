CORS:
Always remeber while conneting to backend with the frontend you will need to be use cors just install it and app.use cors()
 then after that you have to pass some config to cors such as origin: link of frontend website and credintials:true 
for accesing the cookie session into the front end now one last thing into the front end side while calling the api using 
axios just write in the last part withCreditianls:true now all set

Redux:
at first create a utils file then there have to create a store.js ex:

import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
//here singluer reducer
export default appStore;

then have to create slice.js

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    //here pruler reducers
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer; //here we have to write reducer not reducers


now we can have access to the store then where you want to use the store/what data you want to store you have to put that into dipatch
    const dispatch = useDispatch();
    dispatch(actionName(res.data.user));//this willl save the user data into redux toolkit

now for accesign the data we have to use 
userSelector hook
  const user=useSelector(store=>store.storeName);