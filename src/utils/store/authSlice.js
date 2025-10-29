import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignInData: (state, action) => {
      state.signInData = action.payload;
    },
    
  },
});

export const { setSignInData } = authSlice.actions;
export default authSlice.reducer;
