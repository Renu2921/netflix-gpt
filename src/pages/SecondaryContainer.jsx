import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const Movies=useSelector((store)=>store.movies);
  return (
    <div className='bg-black'>
      <div className='md:-mt-52'>
    <MovieList title="Now Playing" movies={Movies.movieList} />
    <MovieList title="Popular Movies" movies={Movies.polulatMovieList} />
    <MovieList title="Top Rated Movies" movies={Movies.topRatedMovieList} />
    <MovieList title="Upcoming Movies" movies={Movies.upcomingMovieList} />
   
    </div>
    </div>
  )
}

export default SecondaryContainer
