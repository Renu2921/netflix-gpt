import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptPage:false
    },
    reducers:{
        setShowGptPage:(state)=>{
            state.showGptPage=!state.showGptPage
        }
    }
});

export const {setShowGptPage}=gptSlice.actions;
const gptReducer=gptSlice.reducer;
export default gptReducer;