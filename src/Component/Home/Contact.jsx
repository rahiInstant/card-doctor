const Contact = () => {
  const partOfContact = (icon, title, description)  => {
    return <>
      <div className="flex gap-5">
        <div className="flex items-center">
          <img src={icon} alt="" />
        </div>
        <div className="text-white">
          <h1 className="font-medium">{title}</h1>
          <h1 className="mt-[10px] text-[25px] font-bold">{description}</h1>
        </div>
      </div>
    </>
  };

  return (
    <div className="bg-[#151515] px-[70px] py-[90px] rounded-[10px] mt-32 flex justify-between">
      {partOfContact("/icons/time.png",'We are open monday-friday','7:00 am - 9:00 pm')}
      {partOfContact("/icons/phone.png",'Have a question?','+2546 251 2658')}
      {partOfContact("/icons/location.png",'Need a repair? our address','Liza Street, New York')}
    </div>
  );
};

export default Contact;
