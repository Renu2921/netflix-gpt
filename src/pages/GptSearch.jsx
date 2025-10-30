import React from 'react'
import SearchBar from './SearchBar'
import { BG_IMAGE_URL } from '../utils/constants/urlConst'

const GptSearch = () => {
  return (
    <div className=''>
        <div className='absolute -z-10'>
    <img
        src={BG_IMAGE_URL}
        alt="bg-image"
        className=""
    />
    </div>
     <SearchBar/>
    </div>
  )
}

export default GptSearch
