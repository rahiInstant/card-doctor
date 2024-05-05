import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex justify-center flex-col h-screen items-center">
      <img src="/error.svg" alt="" />
      <Link to="/">
        <button className="mt-10 border group border-primary py-4 px-8 flex gap-3 items-center rounded-lg text-2xl font-semibold hover:text-white hover:bg-primary duration-150">
          Go to{" "}
          <span className="text-primary group-hover:text-white">
            <IoHomeOutline />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
