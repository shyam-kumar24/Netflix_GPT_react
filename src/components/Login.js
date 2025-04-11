import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import {PAGE_IMG} from '../utils/constants'


function Login() {
  const [isSignInForm, setInSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => {
    setInSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // once user is created then update the profile.
          updateProfile(user, {
            displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
              const {uid,email, displayName, photoURL} = auth.currentUser
              dispatch(addUser({uid: uid, email: email, displayName: displayName}))
          }).catch((error) => {
            setErrorMessage(error.message)
          });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={PAGE_IMG}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 bg-black mt-36 mx-auto left-0 right-0 text-white p-12 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full name ... "
            className="p-4 my-4 w-full bg-gray-700 rounded"
          />
        )}
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
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={() => toggleSigninForm()}>
          {isSignInForm
            ? "New to Netflix ? Sign Up now"
            : "Already a user Sign In now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
