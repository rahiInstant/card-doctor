const CustomerSays = () => {
  const star = <img src="/icons/star.svg" alt="" />;
  const userReaction = (name, title, comment) => {
    return (
      <div className="border p-[40px] rounded-[10px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className=" rounded-full w-16 h-16 bg-gray-600"></div>
            <div>
              <h1 className="text-[25px] font-bold">{name}</h1>
              <h1 className="text-[20px] font-semibold text-[#737373]">
                {title}
              </h1>
            </div>
          </div>
          <div>
            <img className="w-20 h-20 " src="/icons/quote.svg" alt="" />
          </div>
        </div>
        <p className="mt-5 text-base text-[#737373]">{comment}</p>
        <div className="flex gap-1 items-center mt-5">
          {star}
          {star}
          {star}
          {star}
          {star}
        </div>
      </div>
    );
  };
  return (
    <div className="mt-32 flex flex-col items-center">
      <div className="space-y-5 text-center">
        <h3 className=" text-xl font-bold text-primary">Testimonial</h3>
        <h1 className="text-[45px] font-bold">What Customer Says</h1>
        <p className="text-secondary  ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {userReaction(
          "Awlad Hossain",
          "Businessman",
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        )}
        {userReaction(
          "Awlad Hossain",
          "Businessman",
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        )}

      </div>
    </div>
  );
};

export default CustomerSays;
