import {useEffect} from 'react'
import { API_OPTIONS } from '../constants/urlConst';
import { useDispatch } from 'react-redux';
import { setMovieList, setPolulatMovieList, setTopRatedMovieList, setUpcomingMovieList } from '../store/movieListSlice';

const useMovieList=()=>{
const dispatch=useDispatch();
const MoviesListData=async()=>{
    try{
const response=await fetch("https://api.themoviedb.org/3/movie/now_playing",API_OPTIONS);
   const jsonData=await response.json();
   dispatch(setMovieList(jsonData.results));
    }catch(error){
        console.error(error);
    }
}

useEffect(()=>{
MoviesListData();
},[]);
};

export default useMovieList;

export const usePolularMovies=()=>{
    const dispatch=useDispatch();
const popularMoviesListData=async()=>{
    try{
const response=await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
   const jsonData=await response.json();
   dispatch(setPolulatMovieList(jsonData.results));
    }catch(error){
        console.error(error);
    }
}

useEffect(()=>{
popularMoviesListData();
},[]);
}

export const useTopratedMovies=()=>{
    const dispatch=useDispatch();
const topRatedMoviesListData=async()=>{
    try{
const response=await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS);
   const jsonData=await response.json();
   dispatch(setTopRatedMovieList(jsonData.results));
    }catch(error){
        console.error(error);
    }
}

useEffect(()=>{
topRatedMoviesListData();
},[]);
}

export const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
const upcomingMoviesListData=async()=>{
    try{
const response=await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
   const jsonData=await response.json();
   dispatch(setUpcomingMovieList(jsonData.results));
    }catch(error){
        console.error(error);
    }
}

useEffect(()=>{
upcomingMoviesListData();
},[]);
}