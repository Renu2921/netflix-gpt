import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SearchMovieSuggestions = () => {
  const  movieResults  = useSelector((store) => store.gpt.movieResults);
  if (!movieResults) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70 mt-20">
      <div>
          <MovieList
            title="Search Results"
            movies={movieResults}
          />
      </div>
    </div>
  );
};
export default SearchMovieSuggestions;