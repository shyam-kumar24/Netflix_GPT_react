import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch()
  
  // ye navigate hook sign in ka data store ho jaane ke baad user ko browse page par laane ke liye hai

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/browse",
        element: <Browse/>
    }
  ])

  useEffect(() => {
    // this code has been copied from firebase doc. and many such codes are also .
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email, displayName} = user
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        
      } else {
        dispatch(removeUser())
        
      }
    });
  },[])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body