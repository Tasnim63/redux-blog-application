import { createSlice } from "@reduxjs/toolkit";

const initialState =[
   
]
const commentSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addComment:(state, action) => {
          state.push(action.payload);
        }
    }

});

export const {addComment} = commentSlice.actions
export default commentSlice.reducer