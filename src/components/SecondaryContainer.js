import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)

  return movies && (
    <div className=" bg-black">
        <div className="mt-0 md:-mt-60 relative z-10">
          <MovieList title={'Now Playing'} movies={movies.nowPlayingMovie}/>
          <MovieList title={'Trending'} movies={movies.topRatedMovies}/>
          <MovieList title={'Popular'} movies={movies.popularMovies}/>
          <MovieList title={'Upcoming movies'} movies={movies.upcomingMovies}/>
          <MovieList title={'Horror movies'} movies={movies.nowPlayingMovie}/>
        </div>
    </div>
  )
}

export default SecondaryContainer