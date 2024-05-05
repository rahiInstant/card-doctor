import { RxCross1 } from "react-icons/rx";
import ServiceBanner from "./ServiceBanner";
import { BsArrow90DegLeft } from "react-icons/bs";
import { ImBin } from "react-icons/im";

const ManageOrder = () => {
  <ServiceBanner />;
  const row = (image) => {
    return (
      <tr className="*:p-4">
        <td className="w-14">
          <div className="w-8 h-8 bg-[#444444] rounded-full flex justify-center items-center text-white">
            <RxCross1 />
          </div>
        </td>
        <td className="w-48">
          <img
            src={image}
            className="w-[150px] h-[150px] rounded-[10px]"
            alt=""
          />
        </td>
        <td>
          <div>
            <h1 className="text-xl font-semibold">Martha Knit Top</h1>
            <h3>Color : Green</h3>
            <h3>Size: S</h3>
          </div>
        </td>
        <td className="text-xl font-semibold">$25.00</td>
        <td className="text-xl font-semibold">22-10-2022</td>
        <td className="w-24">
          <select
            name=""
            id=""
            className="py-2 px-5 w-fit rounded-md border border-green-800 text-xl font-semibold"
          >
            <option value="">-- status --</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </td>
      </tr>
    );
  };
  return (
    <div className="mt-[90px]">
      <ServiceBanner />
      <div className="mt-16">
        <table className="  w-full">
          <tbody>
            {row("/images/services/1.jpg")}
            {row("/images/services/2.jpg")}
            {row("/images/services/4.jpg")}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
