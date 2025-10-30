// import React, { useRef } from "react";
// import { lang } from "../utils/constants/langConstant";
// import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openai";
// import { API_OPTIONS } from "../utils/constants/urlConst";
// import { addGptMovieResult } from "../utils/store/gptPageToggleSlice";

// const SearchBar = () => {
//     const dispatch=useDispatch();
//   const langKey = useSelector((store) => store.config.selectLang);
//   const searchText = useRef(null);

//   // search movie in TMDB
//   const searchMovieTMDB = async (movie) => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/search/movie?query=" +
//         movie +
//         "&include_adult=false&language=en-US&page=1",
//       API_OPTIONS
//     );
//     const json = await data.json();

//     return json.results;
//   };

//   const handleSearchClick = async () => {
//     const gptQuery =
//       "Act as a Movie Recommendation system and suggest some movies for the query : " +
//       searchText.current.value +
//       ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

//     const gptSearchResults = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: gptQuery }],
//     });
//      console.log(gptSearchResults?.choices?.[0]?.message?.content);
//      // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
//     const gptMovies = gptSearchResults.choices?.[0]?.message?.content.split(",");

//     // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
//      // For each movie I will search TMDB API

//     const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
//     // [Promise, Promise, Promise, Promise, Promise]

//     const tmdbResults = await Promise.all(promiseArray);

//     console.log(tmdbResults);

//     dispatch(
//       addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
//     );
//   };
   
//   return (
//     <div className=" flex justify-center pt-[10%]">
//       <form className="w-1/2 bg-black grid grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
//         <input
//           ref={searchText}
//           type="text"
//           className="p-4 m-4 col-span-9"
//           placeholder={lang[langKey].searchPlaceholder}
//         />
//         <button
//         type="button"  
//           onClick={handleSearchClick}
//           className="col-span-3 text-white bg-red-600 m-4 px-4 py-2 rounded-lg"
//         >
//           {lang[langKey].search}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;

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
    console.log("jsonData",jsonData.results)
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

