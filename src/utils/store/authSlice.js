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
    removeUser: (state) => {
      state.signInData = null; 
    },
  },
});

export const { setSignInData, removeUser } = authSlice.actions;
export default authSlice.reducer;
