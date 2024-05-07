import { updateCurrentUser, updateProfile } from "firebase/auth";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import auth from "../auth/firebase.config";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../auth/AuthContext";

const SignUp = () => {
  const { createUser, googleSignIn, facebookSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);
  const [helmet, setHelmet] = useState("Arohi | Log in");

  function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => {
            successMsg("Create User successfully. Redirecting...");
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
        }, 2000);
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
    <div className="flex gap-6 mt-[150px] items-center">
      <div className="w-1/2">
        <img className="h-[500px]" src="/images/login/login.svg" alt="" />
      </div>
      <div className="border p-[75px] rounded-[10px] w-1/2 flex flex-col items-center">
        <h1 className="text-[40px] font-semibold mb-10 text-center">Sign Up</h1>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-7 w-full"
        >
          {inputField("Name", "Your name", "name", "text")}
          {inputField("Email", "Your email", "email", "email")}
          {inputField("Password", "********", "password", "password")}

          <button
            type="submit"
            value="Submit"
            className="bg-primary text-lg font-semibold text-white w-full rounded-[5px] py-4 text-center"
          >
            Submit
          </button>
        </form>
        <h3 className="my-[30px] text-lg font-medium text-center ">
          Or Sign Up with
        </h3>
        <div className="flex gap-6">
          {icon(<FaFacebookF />, handleSignInWithFacebook)}
          {icon(<FcGoogle />, handleSignInWithGoogle)}
          {icon(<FaTwitter />)}
        </div>
        <p className="mt-12 text-[#737373]">
          Already have an account?{" "}
          <Link to="/login" className="text-lg font-semibold text-primary">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
