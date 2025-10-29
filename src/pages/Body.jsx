import React,{useEffect} from 'react'
import Login from './login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {auth} from "../utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import {removeUser, setSignInData} from "../utils/store/authSlice"

const Body = () => {
const dispatch=useDispatch();
useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    dispatch(setSignInData({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL:user.photoURL
  }))
  } else {
    dispatch(setSignInData())
  }
});
},[]);
    const AppRoute=createBrowserRouter([
        {
            path:"/",
            element:<Login/>,

        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])
  return (
    <div>
      <RouterProvider router={AppRoute}>
      </RouterProvider>

    </div>
  )
}

export default Body
