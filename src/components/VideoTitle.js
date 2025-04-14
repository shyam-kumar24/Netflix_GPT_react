const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video md:pt-[10%] md:mt-[7%] mt-[5%] pt-10 px-6 absolute  text-white bg-gradient-to-r from-black">
      <h1 className="md:font-bold md:text-5xl text-4xl">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-2/4">{overview}</p>
      <div className="flex md:gap-5 gap-2">
        <button className="bg-white md:h-auto h-10 px-2 text-black md:px-6 md:py-3 md:text-3xl rounded-md text-center md:flex gap-4  hover:bg-opacity-50">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>
        <button className="bg-gray-500 text-white md:px-6 md:py-3 md:text-3xl md:h-auto h-10 px-2 rounded-md text-center">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
