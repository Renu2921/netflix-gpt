import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants/urlConst';
import { setMovieTrailer } from '../utils/store/movieListSlice';

const VideoBackground = ({id}) => {
    const dispatch=useDispatch();
    const trailerVideo=useSelector((store)=>store.movies.movieTrailer);
    const officialTrailer=trailerVideo?.filter((video)=>video?.type==="Trailer");
    const trailer=async()=>{
        const response=await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",API_OPTIONS);
        const jsonData=await response.json();
        dispatch(setMovieTrailer(jsonData.results))
    }
    useEffect(()=>{
     trailer();
    },[])
  return (
    <div className='w-screen pt-16 md:pt-0'>
     <iframe 
     className='w-screen aspect-video'
     src={"https://www.youtube.com/embed/" + officialTrailer?.[0]?.key + 
        "?&autoplay=1&mute=1"
    }
     title="YouTube video player" 
     frameBorder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
       allowFullScreen>
       </iframe>
    </div>
  )
}

export default VideoBackground
