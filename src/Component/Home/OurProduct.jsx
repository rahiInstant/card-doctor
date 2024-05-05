const OurProduct = () => {
  const star = <img src="/icons/star.svg" alt="" />;
  const card = (image, title, price) => {
    return (
      <div className="border p-6 rounded-[10px]">
        <div className="w-full h-[200px] bg-[#F3F3F3] rounded-[10px]">
          <img
            className="w-full h-full py-[30px] px-[75px]"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col mt-5 items-center space-y-2.5">
          <div className="flex gap-1">
            {star}
            {star}
            {star}
            {star}
            {star}
          </div>
          <h1 className="text-[25px] font-bold">{title}</h1>
          <h1 className="text-xl font-semibold text-primary ">{price}</h1>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-32 flex flex-col items-center">
      <div className="space-y-5 text-center">
        <h3 className=" text-xl font-bold text-primary">Popular Products</h3>
        <h1 className="text-[45px] font-bold">Browse Our Products</h1>
        <p className="text-secondary  ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {card("/images/products/1.png", "Car Engine Plug", "$20.00")}
        {card("/images/products/2.png", "Car Air Filter", "$20.00")}
        {card("/images/products/3.png", "Cools Led Light", "$20.00")}
        {card("/images/products/4.png", "Cools Led Light", "$20.00")}
        {card("/images/products/5.png", "Car Engine Plug", "$20.00")}
        {card("/images/products/6.png", "Car Engine Plug", "$20.00")}
      </div>

      <button className="py-4 px-5 mt-10 border border-primary text-primary text-lg font-semibold rounded-md">
        More Product
      </button>
    </div>
  );
};

export default OurProduct;
