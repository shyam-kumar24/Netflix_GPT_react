import { IMG_CDN } from "../utils/constants"


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 rounded-lg overflow-hidden" >
        <img src={IMG_CDN + posterPath} alt="" />
    </div>
  )
}

export default MovieCard