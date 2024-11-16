import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const [currentState, setCurrentState] = useState("SignUp");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();

    try {
      if (currentState === "SignUp") {
        createUserWithEmailAndPassword(auth, email, password);
        toast.success("Account Created SucessFully");
        navigate("/");
      } else {
        //For Signin
        signInWithEmailAndPassword(auth, email, password);
        toast.success("Login SucessFully");
        navigate("/");
      }
    } catch (e) {
      toast.error("Errorr!");
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(email);
  }, []);

  return (
    <div className="absolute flex flex-col items-center justify-center w-[90vw] max-w-md p-8 bg-gray-200 rounded-lg shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md z-10 animate-fadeIn">
      <div className="absolute top-4 right-4">
        <i
          className="ri-close-line text-gray-900 text-3xl cursor-pointer hover:text-gray-900 transition duration-300"
          onClick={() => navigate("/")}
          aria-label="Close"
        ></i>
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        {currentState === "SignUp" ? "Sign Up" : "Sign In"}
      </h2>
      <form
        onSubmit={formHandler}
        className="flex flex-col items-center w-full"
      >
        {currentState === "SignUp" && (
          <input
            type="text"
            placeholder="Username"
            className="mb-4 px-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            onChange={(e) => setUsername(e.target.value)} // Update username state
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="mb-4 px-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-6 px-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg w-full font-medium hover:bg-indigo-600 transition duration-300"
        >
          {currentState === "SignUp" ? "Create Account" : "Log In"}
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        {currentState === "SignUp"
          ? "Already have an account?"
          : "Don't have an account?"}{" "}
        <button
          type="button"
          className="text-indigo-500 hover:underline"
          onClick={() =>
            setCurrentState(currentState === "SignUp" ? "SignIn" : "SignUp")
          }
        >
          {currentState === "SignUp" ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default SignUp;
