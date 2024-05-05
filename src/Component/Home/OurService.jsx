const OurService = () => {
  const card = (img, title, price) => {
    return (
      <>
        <div className="border p-6 rounded-[10px]">
          <div className="w-full h-[200px]">
            <img className="w-full h-full rounded-[10px]" src={img} alt="" />
          </div>
          <div className="mt-5">
            <h1 className="text-[25px] font-bold">{title}</h1>
            <div className="flex justify-between items-end">
              <h1 className="text-xl font-semibold text-primary mt-5">
                Price : {price}
              </h1>
              <img src="/icons/Frame.svg" alt="" />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="mt-32 flex flex-col items-center">
      <div className="space-y-5 text-center">
        <h3 className=" text-xl font-bold text-primary">Service</h3>
        <h1 className="text-[45px] font-bold">Our Service Area</h1>
        <p className="text-secondary  ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {card("/images/services/1.jpg", "Electrical System", "$20.00")}
        {card("/images/services/2.jpg", "Electrical System", "$20.00")}
        {card("/images/services/2.jpg", "Electrical System", "$20.00")}
        {card("/images/services/4.jpg", "Electrical System", "$20.00")}
        {card("/images/services/5.jpg", "Electrical System", "$20.00")}
        {card("/images/services/6.jpg", "Electrical System", "$20.00")}
      </div>
      <button className="py-4 px-5 mt-10 border border-primary text-primary text-lg font-semibold rounded-md">
        Latest Project
      </button>
    </div>
  );
};

export default OurService;
