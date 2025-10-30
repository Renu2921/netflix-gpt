import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import movieReducer from "./movieListSlice";
import gptReducer from "./gptPageToggleSlice";
import configReducer from "./configSlice";

const store=configureStore({
  reducer:{
    auth:authReducer,
    movies:movieReducer,
    gpt:gptReducer,
    config:configReducer
  }  
});

export default store;