import React, { useRef } from "react";
import { lang } from "../utils/constants/langConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants/urlConst";
import { addGptMovieResult } from "../utils/store/gptPageToggleSlice";

const SearchBar = () => {
    const dispatch=useDispatch();
  const langKey = useSelector((store) => store.config.selectLang);
  const searchText = useRef(null);

  const handleSearchClick = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
     dispatch(addGptMovieResult(jsonData.results))
  };
   
  return (
    <div className=" flex justify-center pt-[50%] md:pt-[10%] ">
      <form className="w-[90%] md:w-1/2 bg-black grid grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-1 md:p-4 mx-1 my-4 md:m-4 col-span-9"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
        type="button"  
          onClick={handleSearchClick}
          className="col-span-3 text-white bg-red-600 mx-1 my-4 md:m-4 px-1 md:px-4 py-2 rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

