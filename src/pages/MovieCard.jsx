import React from 'react';
import { POSTER_URL } from '../utils/constants/urlConst';


const MovieCard = ({poster}) => {
  console.log("poster",poster)
  return (
    <div className='w-48'>
     <img src={POSTER_URL+poster} alt="posterimage" className='rounded-md'/>
    </div>
  )
}

export default MovieCard
