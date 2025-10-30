import React,{useEffect} from 'react'
 import {signOut } from "firebase/auth";
 import {auth} from "../utils/firebaseConfig";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { setSignInData} from "../utils/store/authSlice"
import { LOGO_URL, PROFILE_URL } from '../utils/constants/urlConst';
import { setShowGptPage } from '../utils/store/gptPageToggleSlice';
import { SUPPORTED_LANG } from '../utils/constants/langConstant';
import { setSelectLang } from '../utils/store/configSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
const user=useSelector((store)=>store.auth);
const showGptPage=useSelector((store)=>store.gpt.showGptPage);
  const handleLogout=()=>{
signOut(auth).then(() => {
}).catch((error) => {

});
}

useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    dispatch(setSignInData({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL:user.photoURL
  }))
  navigate("/browse");
  } else {
    dispatch(setSignInData())
     navigate("/");
  }
});
// unsusbcrive when component unmount
return ()=>unsubscribe();
},[]);

const handleToggle=()=>{
  dispatch(setShowGptPage());
};
const handleLangChange=(e)=>{
  dispatch(setSelectLang(e.target.value))
}

  return (
    <div className='absolute px-8 py-2 z-10 flex  justify-between w-full bg-gradient-to-b from-black'>
      <div>
    <img 
    className='w-44'
    alt="logo"
    src={LOGO_URL}/>
    </div>
    {user?.signInData &&(
     <div className='flex gap-2 justify-center items-center'>
      {showGptPage &&
       <select className='bg-gray-900 p-2 m-2 text-white' onChange={handleLangChange}>
        {
          SUPPORTED_LANG?.map((lang)=>
         <option key={lang.indetifier} value={lang.indetifier}>{lang.name} </option> 
          )
        }
      </select>
      }
     
    <button 
    onClick={handleToggle}
    className='bg-purple-600 text-white px-3 py-2 mx-4 rounded-lg'>{showGptPage?"Go Home" :"GPT Search"}</button>
    <div className='flex gap-2 justify-center items-center'>
      <img src={PROFILE_URL}
      alt="profile-image"/>
      <p  className="cursor-pointer text-white" onClick={handleLogout}>Logout</p>
    </div>
    </div> 
    )
    }
    
    </div>
  )
}

export default Header
