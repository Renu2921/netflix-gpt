import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  console.log("moviesee",movies)
  return (
    <div className='px-6'>
        <h1 className='text-2xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className="flex gap-7">
          {movies?.map((movie)=>
          <MovieCard key={movie.id } poster={movie?.poster_path }/> 
        )}
  </div>
  </div>
    </div>
  )
}

export default MovieList
