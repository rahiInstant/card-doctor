import ServiceBanner from "./ServiceBanner";
import { RxCross1 } from "react-icons/rx";
import { BsArrow90DegLeft } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";
const CartDetail = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/user-order?email=${user.email}`)
      .then((res) => setOrder(res?.data));
  }, [user, axiosSecure]);
  function handleDeleteBtn(id) {
    axiosSecure.delete(`/user-order?id=${id}`).then(() => {
      const remaining = order.filter((item) => item._id !== id);
      setOrder(remaining);
    });
  }

  return (
    <div className="mt-[90px]">
      <ServiceBanner />
      <div className="mt-16">
        <table className="  w-full">
          <tbody>
            {order?.map((item, idx) => {
              return (
                <tr key={idx} className="*:p-4">
                  <td className="w-14">
                    <div
                      onClick={() => handleDeleteBtn(item._id)}
                      className=" cursor-pointer w-8 h-8 bg-[#444444] rounded-full flex justify-center items-center text-white"
                    >
                      <RxCross1 />
                    </div>
                  </td>
                  <td className="w-48">
                    <img
                      src={item.image}
                      className="w-[150px] h-[150px] rounded-[10px]"
                      alt=""
                    />
                  </td>
                  <td>
                    <div>
                      <h1 className="text-xl font-semibold">{item.title}</h1>
                      <h3>Service ID: {item.serviceId}</h3>
                      <h3>Message: {item.comment}</h3>
                    </div>
                  </td>
                  <td className="text-xl font-medium">${item.price}</td>
                  <td className="text-xl font-medium">{item.date}</td>
                  <td className="w-24">
                    <div
                      className={`py-2 px-5 w-fit rounded-md ${
                        item.status == "ordered"
                          ? "bg-primary"
                          : item.status == "confirm"
                          ? "bg-blue-700"
                          : "bg-green-700"
                      }  text-white text-xl font-semibold`}
                    >
                      {item.status}
                    </div>
                  </td>
                </tr>
              );
            })}
            {/* {row("/images/services/5.jpg")}
            {row("/images/services/6.jpg")}
            {row("/images/services/4.jpg")} */}
          </tbody>
        </table>
        <div className="mt-12 flex justify-between text-lg text-[#444444]">
          <h1 className="flex gap-2 items-center">
            <BsArrow90DegLeft /> Continue Shopping
          </h1>
          <h1 className="flex gap-2 items-center">
            <ImBin /> Clear Shopping Cart
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
