import { useContext } from "react";
import { AuthContext } from "./Component/auth/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Private = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return "loading...";
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Private;
