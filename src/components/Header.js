import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {onAuthStateChanged} from "firebase/auth"
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // this is subscribing the store using useSelector
  const user = useSelector(store => store.user) 

  const handleSignOut = () => {
    // this api came from firebase doc. akhay has copied from there and we have to .serach api by the name sign out
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }

  useEffect(() => {
    // this code has been copied from firebase doc. and many such codes are also .
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email, displayName} = user
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe()
  },[])


  return (
    <div className="absolute w-full px-8  py-2 bg-gradient-to-b from-black z-10 flex justify-between text-white">
      <img
        className="w-40"
        src={LOGO}
        alt=""
      />
      {user && <div className="flex gap-4 items-center">
        <img className="w-10 h-10 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKNdKRIgbcMkyGq1cQeq40IA-IQS-FDWnTQ&s" alt="" />
        <span>{user?.displayName}</span>
        <button onClick={() => handleSignOut()} className="font-bold text-lg">Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
