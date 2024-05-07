import axios from "axios";
import ServiceBanner from "./ServiceBanner";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const params = useParams();
  // console.log(params);
  const { data, isPending } = useQuery({
    queryKey: ["particular"],
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:8080/particular/${params.id}`
      );
      return result.data;
    },
  });

  if (isPending) {
    return "Loading...";
  }
  // console.log(data);
  function handleCheckOut(e) {
    e.preventDefault();
    const form = e.target;
    const userInfo = {
      fname: form.fname.value,
      lname: form.lname.value,
      phone: form.phone.value,
      email: form.email.value,
      comment: form.comment.value,
      date: new Date().toLocaleString(),
      serviceId: data.service_id,
      title: data.title,
      image: data.img,
      price: data.price,
      status: "ordered",
    };
    // console.log(userInfo);
    axios
      .post("http://localhost:8080/check-out", userInfo)
      .then(() => form.reset());
  }

  const inputField = (
    placeholder,
    name,
    defaultValue = "",
    disable = false
  ) => {
    return (
      <input
        type="text"
        name={name}
        id=""
        disabled={disable}
        placeholder={placeholder}
        className="py-4 px-6 outline-none w-full rounded-[10px] bg-white disabled:opacity-55 disabled:"
        defaultValue={defaultValue}
      />
    );
  };
  return (
    <div>
      <ServiceBanner />
      <div className="mt-28 rounded-[10px] p-24 bg-[#F3F3F3]">
        <form onSubmit={handleCheckOut} className="flex flex-col gap-6">
          <div className="flex gap-5 text-lg">
            {inputField("First name", "fname")}
            {inputField("Last name", "lname")}
          </div>
          <div className="flex gap-5 text-lg">
            {inputField("Your Phone", "phone")}
            {inputField("Your Email", "email", user.email, true)}
          </div>
          <textarea
            placeholder="Your Message"
            className="py-4 px-6 outline-none w-full rounded-[10px]"
            name="comment"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button
            type="submit"
            value="Order Confirm"
            className="bg-primary text-lg font-semibold text-white w-full rounded-[5px] py-4 text-center"
          >
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
