const AboutUs = () => {
  return (
    <div className="mt-32 flex gap-10">
      <div className="relative  w-1/2">
        <img
          className="w-[500px] h-[420px] rounded-[10px]"
          src="/images/about_us/person.jpg"
          alt=""
        />
        <img
          className="w-[290px] h-[300px] border-4 border-white rounded-[10px] absolute left-1/2 top-1/3"
          src="/images/about_us/parts.jpg"
          alt=""
        />
      </div>
      <div className="w-1/2">
        <h3 className="font-bold text-xl text-primary mb-5">About us</h3>
        <h1 className="text-[45px] font-bold mb-7">
          We are qualified & of experience in this field
        </h1>
        <p className="leading-[30px] text-[#737373] text-justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p className="leading-[30px] text-[#737373] mt-5 mb-7 text-justify">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button className="py-4 px-5 bg-primary rounded-md text-white font-semibold text-lg">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
