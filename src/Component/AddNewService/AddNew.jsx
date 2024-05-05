import ServiceBanner from "./ServiceBanner.jsx";

const AddNew = () => {
  const inputField = (placeholder, name) => {
    return (
      <input
        type="text"
        name={name}
        id=""
        placeholder={placeholder}
        className="py-4 px-6 outline-none w-full rounded-[10px]"
      />
    );
  };
  return (
    <div>
      <ServiceBanner />
      <div className="mt-28 rounded-[10px] p-24 bg-[#F3F3F3]">
        <form className="flex flex-col gap-6">
          <div className="flex gap-5 text-lg">
            {inputField("First name", "fname")}
            {inputField("Last name", "lname")}
          </div>
          <div className="flex gap-5 text-lg">
            {inputField("Your Phone", "phone")}
            {inputField("Your Email", "email")}
          </div>
          <textarea
            placeholder="Your Message"
            className="py-4 px-6 outline-none w-full rounded-[10px]"
            name="comment"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="bg-primary text-lg font-semibold text-white w-full rounded-[5px] py-4 text-center"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNew;
