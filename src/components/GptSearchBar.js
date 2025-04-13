import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openAi";

const GptSearchBar = () => {
 
  const languageSelected = useSelector((store) => store.config.lang)
  const searchText = useRef()

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery = 'Act as a Movie recomendation system and suggest some movies for the query' + searchText.current.value + 'only give me 5 movies'
    const gptResults = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'developer', content: searchText.current.value },
        { role: 'user', content: gptQuery },
      ],
    });

    console.log(gptResults.choices[0].message.content);

  }

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="p-0 m-2 bg-black w-1/2 grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-3 m-3 col-span-9"
          placeholder={lang[languageSelected].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-500 text-white rounded-lg" onClick={handleGptSearchClick}>
          {lang[languageSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
