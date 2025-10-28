import { useState } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {signupSchema,signinSchema} from "../utils/zodSchemaValidation/login"

const Login = () => {
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
  // console.log(errors);
  const onSubmit = (data) => {
    // console.log("✅ Form Submitted:", data);
    reset()
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setButtonType(buttonType === "Sign In" ? "Sign up" : "Sign In");
  };
  return (
    <div className="relative">
      <Header />
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
