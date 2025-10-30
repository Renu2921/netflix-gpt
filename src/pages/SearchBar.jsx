import React from 'react'
import { lang } from '../utils/constants/langConstant'
import { useSelector } from 'react-redux'

const SearchBar = () => {
    const langKey=useSelector((store)=>store.config.selectLang)
  return (
    <div className=' flex justify-center pt-[10%]'>
        <form className='w-1/2 bg-black grid grid-cols-12 '>
     <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].searchPlaceholder}/>
     <button className='col-span-3 text-white bg-red-600 m-4 px-4 py-2 rounded-lg'>{lang[langKey].search}</button>
     </form>
    </div>
  )
}
 
export default SearchBar
