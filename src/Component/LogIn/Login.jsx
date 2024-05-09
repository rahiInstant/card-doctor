import { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAuth from "../CustomHooks/useAuth";

const Login = () => {
  const { logIn, googleSignIn, facebookSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);
  const [helmet, setHelmet] = useState("Arohi | Log in");


  function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then(() => {
        successMsg("Sign in successfully. Redirecting...");
        setHelmet("Redirecting...");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((error) => {
        const Msg = error.message;
        const actualMsg = Msg.slice(Msg.indexOf("/") + 1, Msg.indexOf(")"));
        errorMsg(actualMsg);
      });
    console.log(email, password);
  }

  function handleSignInWithGoogle() {
    googleSignIn()
      .then(() => {
        successMsg("Sign in successfully with Google. Redirecting...");
        setHelmet("Redirecting...");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((error) => {
        const Msg = error.message;
        const actualMsg = Msg.slice(Msg.indexOf("/") + 1, Msg.indexOf(")"));
        errorMsg(actualMsg);
      });
  }

  function handleSignInWithFacebook() {
    facebookSignIn()
      .then(() => {
        successMsg("Sign in successfully with Google. Redirecting...");
        setHelmet("Redirecting...");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        const Msg = error.message;
        const actualMsg = Msg.slice(Msg.indexOf("/") + 1, Msg.indexOf(")"));
        errorMsg(actualMsg);
      });
  }

  const inputField = (label, placeholder, name, type = "text") => {
    return (
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="name" className="text-lg font-semibold">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="border w-full outline-none border-[#E8E8E8] px-6 py-4 rounded-[10px]"
        />
      </div>
    );
  };
  const icon = (element, func = () => "Blank") => {
    return (
      <div
        onClick={func}
        className={`w-12 h-12 cursor-pointer rounded-full bg-[#F5F5F8] text-[#3B5998] text-xl flex justify-center items-center`}
      >
        {element}
      </div>
    );
  };
  return (
    <div>
      <Helmet>
        <title>{helmet}</title>
      </Helmet>
      <div className="flex gap-6 mt-[150px] items-center">
        <div className="w-1/2">
          <img className="h-[500px]" src="/images/login/login.svg" alt="" />
        </div>
        <div className="border p-[75px] rounded-[10px] w-1/2 flex flex-col items-center">
          <h1 className="text-[40px] font-semibold mb-10 text-center">
            Log In
          </h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-7 w-full"
          >
            {inputField("Email", "Your email", "email", "email")}
            {inputField("Password", "********", "password", "password")}

            <button
              type="submit"
              value="Submit"
              className="bg-primary text-lg font-semibold text-white w-full rounded-[5px] py-4 text-center"
            >
              Sign In
            </button>
          </form>
          <h3 className="my-[30px] text-lg font-medium text-center ">
            Or Log In with
          </h3>
          <div className="flex gap-6">
            {icon(<FaFacebookF />, handleSignInWithFacebook)}
            {icon(<FcGoogle />, handleSignInWithGoogle)}
            {icon(<FaTwitter />)}
          </div>
          <p className="mt-12 text-[#737373]">
            Haven't any account?{" "}
            <Link to="/sign-up" className="text-lg font-semibold text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
