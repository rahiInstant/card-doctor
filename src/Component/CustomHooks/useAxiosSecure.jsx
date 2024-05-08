import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8080",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
