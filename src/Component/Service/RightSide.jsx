import { Link } from "react-router-dom";

const RightSide = () => {
  const service = (serviceName) => {
    return (
      <div className="p-[18px] rounded-[5px] bg-white flex justify-between">
        <h1 className="text-base font-semibold">{serviceName}</h1>
        <img src="/icons/Frame.svg" alt="" />
      </div>
    );
  };

  const download = (title) => {
    return (
      <div className="text-white flex justify-between items-center">
        <div className="flex gap-2">
          <img src="/icons/book.svg" alt="" />
          <div>
            <h1 className="text-lg font-semibold">{title}</h1>
            <h3 className="text-[#A2A2A2]">download</h3>
          </div>
        </div>
        <div className="p-4 rounded-[5px] bg-primary">
          <img src="/icons/arwh.svg" alt="" />
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="bg-[#F3F3F3] p-10 rounded-[10px]">
        <h1 className="text-[25px] font-bold mb-5">Services</h1>
        <div className="space-y-5">
          {service("Full Car Repair")}
          {service("Full Car Repair")}
          {service("Full Car Repair")}
          {service("Full Car Repair")}
          {service("Full Car Repair")}
        </div>
      </div>
      <div className="bg-[#151515] p-10 rounded-[10px] mt-7">
        <h1 className="text-[25px] font-bold mb-5 text-white">Download</h1>
        <div className="space-y-5">
          {download("Our Brochure")}
          {download("Company Details")}
        </div>
      </div>
      <div className="bg-[#151515] p-14 rounded-[10px] mt-7 flex items-center flex-col">
        <img src="/logo1.svg" alt="" />
        <h1 className="text-xl font-bold text-white mt-5 text-center leading-[35px]">
          Need Help? We Are Here To Help You
        </h1>
        <div className="rounded-[10px] bg-white p-5 pb-7 mt-7 h-[125px] w-full leading-[30px] text-center relative">
          <h1 className="text-xl font-bold">
            <span className="text-primary">Car Doctor</span> Special
          </h1>
          <h1 className="font-bold text-[#737373] mt-1">
            Save up to <span className="text-primary">60% off</span>
          </h1>
          <div className="py-4 px-6 text-white bg-primary rounded-[5px] w-fit absolute top-[95px] left-1/2 -translate-x-1/2">
            Get A Quote
          </div>
        </div>
      </div>
      <h1 className="text-[35px] font-bold my-7">Price $250.00</h1>
      <Link to={"/check-out"}>
        <div className="bg-primary text-lg font-semibold text-white w-full rounded-[5px] py-4 text-center">
          Proceed Checkout
        </div>
      </Link>
    </div>
  );
};

export default RightSide;
