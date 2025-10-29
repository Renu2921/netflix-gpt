import React from 'react';
 import {signOut } from "firebase/auth";
 import {auth} from "../utils/firebaseConfig";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();

  const handleLogout=()=>{
signOut(auth).then(() => {
  navigate("/");
}).catch((error) => {

});
}

  return (
    <div className='absolute px-8 py-2 z-10 flex  justify-between w-full'>
      <div>
    <img 
    className='w-44'
    alt="logo"
    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
    </div>
    <div className='flex gap-2 justify-center items-center'>
      <img src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
      alt="profile-image"/>
      <p  className="cursor-pointer" onClick={handleLogout}>Logout</p>
    </div>
    </div>
  )
}

export default Header
