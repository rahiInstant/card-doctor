import { RxCross1 } from "react-icons/rx";
import ServiceBanner from "./ServiceBanner";
import { BsArrow90DegLeft } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { useEffect, useState } from "react";
import axios from "axios";

const ManageOrder = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/user-order", {withCredentials:true})
      .then((res) => setOrder(res.data));
  }, []);

  function handleOrderStatus(e, id) {
    axios
      .patch(`http://localhost:8080/update-status?id=${id}`, {
        status: e.target.value,
      })
      .then(() => "");
  }

  // const status = (disable, currenStatus, options = [], id) => {
  //   return (
  //     <select
  //       name=""
  //       id=""
  //       disabled={disable}
  //       onChange={(e) => handleOrderStatus(e, id)}
  //       className="py-2 px-5 w-fit rounded-md border border-green-800 text-xl font-semibold"
  //     >
  //       <option value="" className="hidden">
  //         {currenStatus}
  //       </option>
  //       {options.map((item, idx) => {
  //         return (
  //           <option key={idx} value={item}>
  //             {item}
  //           </option>
  //         );
  //       })}
  //       {/* <option value="confirm">confirm</option>
  //       <option value="delivery">delivery</option> */}
  //     </select>
  //   );
  // };

  return (
    <div className="mt-[90px]">
      <ServiceBanner />
      <div className="mt-16">
        <table className="  w-full">
          <tbody>
            {order.map((item, idx) => {
              return (
                <tr key={idx} className="*:p-4">
                  <td className="w-14">
                    <div className="w-8 h-8 bg-[#444444] rounded-full flex justify-center items-center text-white">
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
                    <select
                      name=""
                      id=""
                      onChange={(e) => handleOrderStatus(e, item._id)}
                      className="py-2 px-5 w-fit rounded-md border border-green-800 text-xl font-semibold"
                    >
                      <option value="" className="hidden">
                        {item.status}
                      </option>
                      <option value="confirm">confirm</option>
                      <option value="delivery">delivery</option>
                    </select>
                    {/* {item.status === "delivery"
                      ? status(true,item.status,)
                      : item.status == "confirm"
                      ? status(false,item.status, ["delivery"], item._id)
                      : status(false,item.status, ["confirm", "delivery"], item._id)} */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
