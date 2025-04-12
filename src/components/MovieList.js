import MovieCard from "./MovieCard"


const MovieList = ({title, movies}) => {

  console.log(movies);
  return (
    <div className="p-4 flex flex-col gap-4 ">
        <h1 className="font-bold text-3xl text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex gap-4">
               {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
            </div>
        </div>
        
    </div>
  )
}

export default MovieList