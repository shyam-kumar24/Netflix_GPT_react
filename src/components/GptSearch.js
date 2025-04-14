import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestions from "./GptMovieSuggestions"
import { PAGE_IMG } from "../utils/constants"

const GptSearch = () => {
  return (
    <> 
        <div className="absolute -z-10">
                <img
                  className="h-screen object-cover md:h-full"
                  src={PAGE_IMG}
                  alt=""
                />
        </div>
        <div className="pt-[25%] md:pt-0">
            <GptSearchBar/>
            <GptMovieSuggestions />
        </div>
    </>
  )
}

export default GptSearch