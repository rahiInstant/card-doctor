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
      className="h-[300px] relative mt-[82px] rounded-b-lg p-[100px] flex items-center"
    >
      <h1 className="text-[45px] font-bold text-white ">Check Out</h1>
      <h1 className="text-white bg-primary absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-lg py-3 px-6 text-xl font-medium">
        Home/Service
      </h1>
    </div>
  );
};

export default ServiceBanner;
