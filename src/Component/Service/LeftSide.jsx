const LeftSide = () => {
  const feature = (title, description) => {
    return (
      <div className="border-t-2 border-[#FF3811] rounded-[10px] bg-[#F3F3F3] p-10">
        <h1 className="text-xl font-bold text-[#444444]">{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
    );
  };

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

  const paragraph = (para) => {
    return (
      <p className="leading-[30px]  text-[#737373] text-justify">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text.
      </p>
    );
  };
  return (
    <div className="col-span-2">
      <img
        className="w-full h-[400px] rounded-[10px]"
        src="/public/images/banner/3.jpg"
        alt=""
      />
      <h1 className="text-[35px]  font-bold mt-10 mb-7">
        Unique Car Engine Service
      </h1>
      {paragraph()}
      <div className="mt-7 grid grid-cols-2 mb-7 gap-6">
        {feature(
          "Instant Car Services",
          "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
        )}
        {feature(
          "24/7 Quality Service",
          "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
        )}
        {feature(
          "Easy Customer Service",
          "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
        )}
        {feature(
          "Quality Cost Service",
          "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
        )}
      </div>
      {paragraph()}
      <h1 className="text-[35px] font-bold mt-10 mb-7">
        3 Simple Steps to Process
      </h1>
      {paragraph()}
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
//
