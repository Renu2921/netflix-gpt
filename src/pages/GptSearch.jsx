import React from 'react'
import SearchBar from './SearchBar'
import { BG_IMAGE_URL } from '../utils/constants/urlConst'
import SearchMovieSuggestions from './SearchMovieSuggestions'

const GptSearch = () => {
  return (
    <div className=''>
        <div className='absolute -z-10'>
    <img
        src={BG_IMAGE_URL}
        alt="bg-image"
        className="h-screen object-cover w-screen"
    />
    </div>
     <SearchBar/>
     <SearchMovieSuggestions/>
    </div>
  )
}

export default GptSearch
