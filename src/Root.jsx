import { Outlet } from "react-router-dom";
import Navbar from "./Component/SharedComponent/Navbar";
import Footer from "./Component/SharedComponent/Footer";

const Root = () => {
  return (
    <div className="dark:bg-gray-900 ">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto font-Inter -z-50">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

// className="max-w-7xl mx-auto"
