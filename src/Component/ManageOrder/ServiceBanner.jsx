const ServiceBanner = () => {
  const styleObj = {
    background:
      'linear-gradient(to right, #151515,#15151500), url("/images/banner/4.jpg")',
    backgroundSize: "cover ",
    backgroundPosition: "center center",
  };
  return (
    <div
      style={styleObj}
      className="h-[300px] relative mt-[82px] rounded-b-lg p-[100px] flex   flex-col gap-1"
    >
      <h1 className="text-[45px] font-bold text-white ">Manage All Orders</h1>
      <h1 className="text-base font-medium text-primary">Manage All Orders</h1>

    </div>
  );
};

export default ServiceBanner;
