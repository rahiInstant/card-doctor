import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://cbd-ten.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const something = useAuth();
  const logOut = something?.logOut;

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        // console.log("correct response");
        return res;
      },
      (err) => {
        console.log("error message", err?.response?.status);
        if (err.response?.status === 401 || err.response?.status === 403) {
          logOut()
            .then(() => {
              <Navigate to="/login"></Navigate>;
            })
            .catch(() => "");
        }
      }
    );
  }, [logOut]);

  return axiosSecure;
};

export default useAxiosSecure;

// https://car-engin.web.app
