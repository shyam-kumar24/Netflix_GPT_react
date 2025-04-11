const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className="flex gap-5">
        <button className="bg-white  text-black px-6 py-3 text-3xl rounded-md text-center flex gap-4  hover:bg-opacity-50">
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
        <button className="bg-gray-500 text-white px-6 py-3 text-3xl rounded-md text-center">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
