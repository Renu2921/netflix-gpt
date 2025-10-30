
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground';
import useMovieList, { usePolularMovies, useTopratedMovies, useUpcomingMovies } from '../utils/hooks/useMovieList';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  useMovieList();
  usePolularMovies()
  useTopratedMovies();
  useUpcomingMovies()
    const movieList=useSelector((store)=>store.movies.movieList);

 if (!movieList || movieList?.length===0) {
    return <p>Loading...</p>;
  }
const { original_title, overview, id } = movieList?.[1] || {};
  return (
    <div>
     <VideoTitle title={original_title} overview={overview}/>
     <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer
