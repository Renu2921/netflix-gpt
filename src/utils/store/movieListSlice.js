import { createSlice } from "@reduxjs/toolkit";

const movieListSlice=createSlice({
    name:"movies",
    initialState:{
        movieList:[],
        polulatMovieList:[],
        topRatedMovieList:[],
        upcomingMovieList:[],
        movieTrailer:[]
    },
    reducers:{
        setMovieList:(state,action)=>{
            state.movieList=action.payload;
        },
         setPolulatMovieList:(state,action)=>{
            state.polulatMovieList=action.payload;
        },
         setTopRatedMovieList:(state,action)=>{
            state.topRatedMovieList=action.payload;
        },
         setUpcomingMovieList:(state,action)=>{
            state.upcomingMovieList=action.payload;
        },
        setMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        }
    }
});

export const {setMovieList,setMovieTrailer,setPolulatMovieList,setTopRatedMovieList,setUpcomingMovieList}=movieListSlice.actions;
const movieReducer=movieListSlice.reducer;
export default movieReducer;