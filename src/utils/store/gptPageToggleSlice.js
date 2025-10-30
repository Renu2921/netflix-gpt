import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptPage:false,
         movieResults: null,
    },
    reducers:{
        setShowGptPage:(state)=>{
            state.showGptPage=!state.showGptPage
        },
        addGptMovieResult: (state, action) => {
      state.movieResults = action.payload;
    },
    }
});

export const {setShowGptPage,addGptMovieResult}=gptSlice.actions;
const gptReducer=gptSlice.reducer;
export default gptReducer;