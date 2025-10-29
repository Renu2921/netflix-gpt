import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {signupSchema,signinSchema} from "../utils/zodSchemaValidation/login"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebaseConfig";
import { showError } from "../utils/toastMessage"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignInData } from "../utils/store/authSlice";


   const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch(); 
  const [buttonType, setButtonType] = useState("Sign In");
  const {register,  handleSubmit, formState: { errors },reset} = useForm({
    resolver: zodResolver(buttonType === "Sign In" ? signinSchema : signupSchema),
    mode: "onSubmit", 
    defaultValues:{
      name:"",
      email:"",
      password:""
    }
  });
  const onSubmit = (data) => {
    // console.log("✅ Form Submitted:", data);
    reset();
    if(buttonType==="Sign up"){
createUserWithEmailAndPassword(auth,data.email,data.password)
  .then((userCredential) => {
    const user=userCredential.user
updateProfile(user, {
  displayName:data.name , photoURL: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
}).then(() => {
  const {uid,email,displayName,photoURL}=auth.currentUser;
  dispatch(setSignInData({
      uid: uid,
      email: email,
      displayName: displayName,
      photoURL:photoURL
    }))
   navigate("/browse") 
}).catch((error) => {
  // An error occurred
  // ...
});
     
    
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    showError(errorMessage)
  });
    }else{
      signInWithEmailAndPassword(auth, data.email,data.password)
  .then((userCredential) => {
    navigate("/browse")
    // const user = userCredential.user;
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    // console.log("errorcode", errorCode)
  showError(errorMessage)
  });
    }
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setButtonType(buttonType === "Sign In" ? "Sign up" : "Sign In");
  };
  return (
    <div className="relative">
      <div className='absolute px-8 py-2 z-10'>
    <img 
    className='w-44'
    alt="logo"
    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
    </div>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg"
          alt="bg-image"
          className=""
        />
      </div>
      <div className=" text-white absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 ">
        <div className=" w-[25%] bg-black bg-opacity-70 p-12 rounded-md">
          <h1 className="text-white font-semibold text-[2.2rem] mb-7">
            {buttonType}
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="absloute flex flex-col gap-4"
          >
            {buttonType === "Sign up" && (
              <div>
                <input
                  type="text"
                  placeholder="Full  Name"
                  className="w-full p-3 bg-gray-600 bg-opacity-70  rounded-md focus:outline-none"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )} 
              </div>
            )}
            <div> 
              <input
                type="text"
                placeholder="Email Address"
                className="w-full p-3 bg-gray-600 bg-opacity-70  rounded-md focus:outline-none"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-600 bg-opacity-70   rounded-md focus:outline-none "
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="border-white w-4 h-4" />
                <label className="">Remember me</label>
              </div>
              <span className=" text-sm">Need help?</span>
            </div>
            <button className="bg-[#e50914] hover:bg-[#f6121d]  text-[1em] py-2 mt-10 rounded-md">
              {" "}
              {buttonType}
            </button>
          </form>
          <button
            onClick={handleToggle}
            className="mt-12 text-gray-400 cursor-pointer"
          >
            {buttonType === "Sign In"
              ? "New to Netflix?"
              : "Already Registered? "}{" "}
            <span className="font-semibold text-white">
              {" "}
              {buttonType === "Sign In" ? "Sign up Now?" : "Sign In now"}
            </span>{" "}
          </button>
          <p className="mt-4 text-xs text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="#learnMore" className="text-blue-400">
              {" "}
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
