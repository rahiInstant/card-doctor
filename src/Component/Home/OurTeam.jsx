const OurTeam = () => {
  const card = (img, name, title) => {
    return (
      <div className="border p-6 rounded-[10px]">
        <div className="w-[320px] h-[280px]">
          <img className="w-full h-full rounded-[10px]" src={img} alt="" />
        </div>
        <div className="mt-5 text-center flex items-center flex-col">
          <h1 className="text-[25px] font-bold">{name}</h1>
          <h2 className="mt-[10px] text-[20px] font-semibold text-[#737373]">
            {title}
          </h2>
          <div className="mt-[15px] flex gap-2 items-center">
            <img src="/icons/fb.svg" alt="" />
            <img src="/icons/tw.svg" alt="" />
            <img src="/icons/in.svg" alt="" />
            <img src="/icons/insta.svg" alt="" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-32 flex flex-col items-center">
      <div className="space-y-5 text-center">
        <h3 className=" text-xl font-bold text-primary">Team</h3>
        <h1 className="text-[45px] font-bold">Meet Our Team</h1>
        <p className="text-secondary  ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {card("/images/team/1.jpg", "John Doe", "Engine Expert")}
        {card("/images/team/2.jpg", "John Doe", "Engine Expert")}
        {card("/images/team/3.jpg", "John Doe", "Engine Expert")}
      </div>

    </div>
  );
};

export default OurTeam;
