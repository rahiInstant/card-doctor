const WhyUs = () => {
  const shortCard = (img, title) => {
    return (
      <div className="border p-[20px] rounded-[10px] flex flex-col gap-3 mt-[10px] items-center">
        <img className="w-[75px] h-[65px]" src={img} alt="" />
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
    );
  };
  return (
    <div className="mt-32 flex flex-col items-center">
      <div className="space-y-5 text-center">
        <h3 className=" text-xl font-bold text-primary">Core Features</h3>
        <h1 className="text-[45px] font-bold">Why Choose Us</h1>
        <p className="text-secondary  ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
          {shortCard("/icons/group.svg", "Expert Team")}
          {shortCard("/icons/watch.svg", "Timely Delivery")}
          {shortCard("/icons/person.svg", "24/7 Support")}
          {shortCard("/icons/Wrench.svg", "Best Equipment")}
          {shortCard("/icons/check.svg", "100% Guranty")}
          {shortCard("/icons/delivery.svg", "Timely Delivery")}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
