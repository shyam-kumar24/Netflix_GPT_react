import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {onAuthStateChanged} from "firebase/auth"
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { removeUser } from "../utils/userSlice";

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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email, displayName} = user
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
  },[])


  return (
    <div className="absolute w-full px-8  py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
