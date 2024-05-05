import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
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
    const icon = (element, color = "") => {
      return (
        <div
          className={`w-12 h-12 cursor-pointer rounded-full bg-[#F5F5F8] text-[${color}] text-xl flex justify-center items-center`}
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
          <form className="flex flex-col gap-7 w-full">
            {inputField("Name", "Your name", "name")}
            {inputField("Email", "Your email", "email")}
            {inputField("Password", "********", "password")}
  
            <input
              type="submit"
              value="Submit"
              className="bg-primary text-lg font-semibold text-white w-full rounded-[5px] py-4 text-center"
            />
          </form>
          <h3 className="my-[30px] text-lg font-medium text-center ">
            Or Sign Up with
          </h3>
          <div className="flex gap-6">
            {icon(<FaFacebookF />, "#3B5998")}
            {icon(<FaLinkedinIn />, "#0A66C2")}
            {icon(<FcGoogle />)}
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

