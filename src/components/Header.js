import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLnaguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // this is subscribing the store using useSelector
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    // this api came from firebase doc. akhay has copied from there and we have to .serach api by the name sign out
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    // this code has been copied from firebase doc. and many such codes are also .
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLnaguage(e.target.value));
  }

  return (
    <div className="absolute w-full px-8  py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between  items-center text-white">
      <img className="w-40" src={LOGO} alt="" />
      {user && (
        <div className="flex md:gap-4 items-center md:w-auto  justify-between w-full">

          {showGptSearch && <select className="px-3 py-2 rounded-lg bg-violet-700"  onChange={handleLanguageChange}>
            {
              SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))
            }
          </select>}

          <button
            className="py-2 px-4 m-2 text-white rounded-lg bg-purple-700"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? 'Home Page' : 'GPT search'}
          </button>
          <img
            className="w-10 h-10 rounded hidden md:inline-block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKNdKRIgbcMkyGq1cQeq40IA-IQS-FDWnTQ&s"
            alt=""
          />
          <span className="hidden md:inline-block">{user?.displayName}</span>
          <button onClick={() => handleSignOut()} className="font-bold text-lg">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
