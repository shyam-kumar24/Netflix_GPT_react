import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const getNowPlayingMovie = async () => {
      const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&region=IN&with_original_language=hi&release_date.gte={min_date}&release_date.lte={max_date}',API_OPTIONS)
      const json = await data.json()
  
      // console.log(json.results);
      dispatch(addNowPlayingMovies(json.results))
    }
  
    useEffect(() => {
      getNowPlayingMovie()
    },[])
}

export default useNowPlayingMovies