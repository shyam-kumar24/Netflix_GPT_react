import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm, setInSignInForm] = useState(true);

  const toggleSigninForm = () => {
    setInSignInForm(!isSignInForm);
  };

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
      <form className="absolute w-4/12 bg-black mt-36 mx-auto left-0 right-0 text-white p-12 rounded-lg bg-opacity-80">
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
          placeholder="Email address... "
          className="p-4 my-4 w-full bg-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password... "
          className="p-4 my-4 w-full bg-gray-700 rounded"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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
