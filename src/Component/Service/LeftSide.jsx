import PropTypes from "prop-types";
const LeftSide = ({ data }) => {
  const step = (num, textNum, shortDescription) => {
    return (
      <div className="border p-[35px] rounded-[10px] flex text-center items-center flex-col">
        <div className="rounded-full w-20 h-20 bg-[#FF38111A] flex justify-center items-center">
          <div className="rounded-full w-14 h-14 bg-[#FF3811] text-xl font-bold flex justify-center items-center text-white">
            {num}
          </div>
        </div>
        <h1 className="uppercase mt-5 text-xl font-bold">{textNum}</h1>
        <p className="mt-5 text-[#737373]">{shortDescription}</p>
      </div>
    );
  };

  return (
    <div className="col-span-2">
      <img className="w-full h-[400px] rounded-[10px]" src={data.img} alt="" />
      <h1 className="text-[35px]  font-bold mt-10 mb-7">{data.title}</h1>
      <div className="text-justify">{data.description}</div>
      <div className="mt-7 grid grid-cols-2 mb-7 gap-6">
        {data.facility.map((item, idx) => {
          return (
            <div
              key={idx}
              className="border-t-2 border-[#FF3811] rounded-[10px] bg-[#F3F3F3] p-10"
            >
              <h1 className="text-xl font-bold text-[#444444]">{item.name}</h1>
              <p className="mt-2">{item.details}</p>
            </div>
          );
        })}
      </div>
      <div className="text-justify">{data.description}</div>
      <h1 className="text-[35px] font-bold mt-10 mb-7">
        3 Simple Steps to Process
      </h1>
      <div className="text-justify">{data.description}</div>
      <div className="grid grid-cols-3 mt-7 gap-6">
        {step("01", "Step One", "It uses a dictionary of over 200 .")}
        {step("02", "Step two", "It uses a dictionary of over 200 .")}
        {step("03", "Step three", "It uses a dictionary of over 200 .")}
      </div>
      <div className="mt-8 relative">
        <img
          className="w-full h-[400px] rounded-[10px]"
          src="/public/images/banner/2.jpg"
          alt=""
        />
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/yt.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LeftSide;

LeftSide.propTypes = {
  data: PropTypes.object,
};
