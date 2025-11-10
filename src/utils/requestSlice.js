import { createSlice } from "@reduxjs/toolkit";

const requestSlice=createSlice({
    name:"request",
    // default to empty array so components can safely map()
    initialState: [],
    reducers: {
        addRequest:(state,action)=>{
            // replace state with payload (expected array)
            return action.payload || [];
        },
    },

})
export const {addRequest}=requestSlice.actions;
export default requestSlice.reducer;