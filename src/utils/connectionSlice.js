import { createSlice } from "@reduxjs/toolkit";

const connectionSlice=createSlice({
    name:"connections",
    initialState:null,
    reducers:{
        addConnections:(state,action)=>{
            return action.payload;
        },
        removeConnectionByUserId: (state, action) => {
            const userId = action.payload;
            if (!state) return state;
            return state.filter((u) => u._id !== userId);
        },
        removeConnections:(state,action)=>{
            return null;
        }
    }
})

export const {addConnections,removeConnectionByUserId,removeConnections} =connectionSlice.actions;
export default connectionSlice.reducer;
