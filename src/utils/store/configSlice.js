import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        selectLang:"en"
    },
    reducers:{
        setSelectLang:(state,action)=>{
            state.selectLang=action.payload;
        }
    }
});

export const {setSelectLang}=configSlice.actions;
const configReducer=configSlice.reducer;
export default configReducer;