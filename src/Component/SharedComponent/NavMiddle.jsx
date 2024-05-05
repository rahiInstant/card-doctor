import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./NavMiddle.css";
const NavMiddle = ({ routes, open }) => {
  // console.log(typeof user)
  return (
    <div
      className={`lg:flex w-[200px] lg:w-auto
      ${open ? "left-6" : "-left-52"} 
      duration-500 md:font-medium absolute lg:static 
      top-20 bg-slate-200 p-4 rounded-md lg:rounded-none 
      lg:left-0 gap-6 lg:bg-transparent lg:p-0 `}
    >
      {routes.map((route, id) => {
        return (
          <NavLink id="link" className="" key={id} to={route.path}>
            <div
              id="link-text"
              className=" hover:bg-slate-200 px-3 text-left lg:text-center dark:text-orange-500 text-black  py-1 rounded-sm text-base font-bold"
            >
              {route.name}
            </div>
          </NavLink>
        );
      })}
      {/* {user ? (
        <div
          id="link-text"
          onClick={handleLogout}
          className="border cursor-pointer lg:hidden  border-orange-900 mt-3 hover:bg-orange-800 hover:text-white duration-150 text-center dark:text-orange-500 text-black  py-1 rounded-lg text-base font-bold"
        >
          Sign out
        </div>
      ) : (
        <Link id="link" className="lg:hidden" to="/login">
          <div
            id="link-text"
            className=" border border-orange-900 mt-3 hover:bg-orange-800 hover:text-white duration-150 text-center dark:text-orange-500 text-black  py-1 rounded-lg text-base font-bold"
          >
            Log In
          </div>
        </Link>
      )} */}
    </div>
  );
};

NavMiddle.propTypes = {
  routes: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func,
};

export default NavMiddle;
