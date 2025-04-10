import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'


const Body = () => {

  
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

  

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body