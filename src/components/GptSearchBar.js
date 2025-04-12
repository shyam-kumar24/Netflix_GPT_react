import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
 
  const languageSelected = useSelector((store) => store.config.lang)

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="p-0 m-2 bg-black w-1/2 grid grid-cols-12 rounded-lg">
        <input
          type="text"
          className="p-3 m-3 col-span-9"
          placeholder={lang[languageSelected].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-500 text-white rounded-lg">
          {lang[languageSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
