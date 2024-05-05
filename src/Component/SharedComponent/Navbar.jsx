import { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import NavMiddle from "./NavMiddle";
import { FaPersonHiking } from "react-icons/fa6";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOPen] = useState(false);
  const [theme, setTheme] = useState(getItem().theme);

  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/add-new-service", name: "Add service", id: 2 },
    { path: "/manage-order", name: "All order", id: 3 },
    { path: "/cart-details", name: "My order", id: 4 },
  ];

  useEffect(() => {
    if (!theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function getItem() {
    const themeData = localStorage.getItem("theme");
    if (themeData) {
      return JSON.parse(themeData);
    } else {
      return { theme: true };
    }
  }
  function setItem(value) {
    localStorage.setItem("theme", JSON.stringify({ theme: value }));
  }

  function handleSetTheme() {
    setItem(!getItem().theme);
    setTheme(getItem().theme);
  }

  return (
    <div className="select-none fixed top-0 left-0 w-full z-10 bg-white">
      <nav className="p-6 flex justify-between items-center shadow">
        <div className="flex items-center gap-1">
          <div
            onClick={() => setOPen(!open)}
            className="text-2xl lg:hidden dark:text-white"
          >
            {open ? <RxCross2 /> : <HiMenuAlt1 />}
          </div>
          <div className="text-3xl font-extrabold flex items-center gap-2 text-emerald-700">
            <FaPersonHiking className="text-orange-600" />
            Arohi
          </div>
        </div>
        <NavMiddle
          // user={user}
          routes={routes}
          open={open}
          // handleLogout={handleLogout}
        ></NavMiddle>
        <div className="flex gap-4  items-center">
          <div
            onClick={handleSetTheme}
            className="h-8 w-8 flex justify-center items-center text-lg cursor-pointer bg-slate-300 rounded-full"
          >
            {theme ? <MdLightMode /> : <MdNightlightRound />}
          </div>
          <div className="flex gap-5">
            <Link to="/login">
              <div className="border border-primary py-2 px-4 rounded-md text-lg font-medium hover:bg-primary hover:text-white duration-200">
                Log In
              </div>
            </Link>
            <Link to="/sign-up">
              <div className="border border-primary py-2 px-4 rounded-md text-lg font-medium hover:bg-primary hover:text-white duration-200">
               Sign Up
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
