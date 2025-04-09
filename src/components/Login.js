import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

function Login() {
  const [isSignInForm, setInSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

  const email = useRef(null)
  const password = useRef(null)

  const toggleSigninForm = () => {
    setInSignInForm(!isSignInForm);
  };
  
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value,password.current.value)
    console.log(message);
    setErrorMessage(message)
    console.log(email.current.value);
    console.log(password.current.value);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen"
          src="https://i.pinimg.com/736x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg"
          alt=""
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-4/12 bg-black mt-36 mx-auto left-0 right-0 text-white p-12 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        { !isSignInForm && <input
          type="text"
          placeholder="Full name ... "
          className="p-4 my-4 w-full bg-gray-700 rounded"
        />}
        <input
          type="text"
          ref={email}
          placeholder="Email address... "
          className="p-4 my-4 w-full bg-gray-700 rounded"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password... "
          className="p-4 my-4 w-full bg-gray-700 rounded"
        />
        <p className="text-red-700 font-bold text-lg py-1">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={() => toggleSigninForm()}>
        {isSignInForm ? "New to Netflix ? Sign Up now" : "Already a user Sign In now"}
          </p>
      </form>
    </div>
  );
}

export default Login;
