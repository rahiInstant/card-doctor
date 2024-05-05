import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-24 py-[130px] px-[150px] bg-[#151515] flex gap-5 justify-between">
      <div className="space-y-5">
        <img src="/logo1.svg" alt="" />
        <p className="text-white w-2/5">
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial .
        </p>
        <div className="flex gap-3">
          <div className="bg-[#797878] rounded-full text-white p-3 w-fit">
            <FaGoogle />
          </div>
          <div className="bg-[#797878] rounded-full text-white p-3 w-fit">
            <FaTwitter />
          </div>
          <div className="bg-[#797878] rounded-full text-white p-3 w-fit">
            <FaInstagram />
          </div>
          <div className="bg-[#797878] rounded-full text-white p-3 w-fit">
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="flex gap-[200px] text-white">
        <div>
          <div className="text-xl font-semibold">About</div>
          <div className="mt-10 space-y-10">
            <div>Home</div>
            <div>Service</div>
            <div>Contact</div>
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold">Company</div>
          <div className="mt-10 space-y-10">
            <div>Why Car Doctor</div>
            <div>About</div>
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold">Support</div>
          <div className="mt-10 space-y-10">
            <div>Support Center</div>
            <div>Feedback</div>
            <div>Accessibility</div>
          </div>
        </div>
      </div>
    </div>
    // <div className=" bg-orange-200 dark:bg-orange-900 pb-6 pt-6 md:pb-10 lg:py-16 flex flex-col lg:px-36 md:px-16 px-5 mt-24 items-center rounded-t-2xl">
    //   <div className="text-3xl font-extrabold flex items-center gap-2 text-emerald-600 mb-4">
    //     <FaPersonHiking className="text-orange-600" />
    //     Arohi
    //   </div>
    //   <p className="text-center  font-medium text-cyan-800 dark:text-orange-200 text-lg">
    //     Discover your dream home with Nest. From luxurious estates to student
    //     housing, find the perfect fit with our diverse selection and
    //     personalized service.
    //   </p>
    //   <div className="mt-16 text-black dark:text-slate-300 flex flex-col-reverse sm:items-center lg:flex-row gap-5 ">
    //     <div className="flex-auto flex flex-col  sm:flex-row items-center lg:items-start text-center md:text-left gap-8 lg:border-r border-cyan-900 lg:pr-5">
    //       <div className="flex gap-8 ">
    //         <nav className="flex flex-col gap-4">
    //           <h6 className="font-semibold text-lg">Services</h6>
    //           <a>Branding</a>
    //           <a>Design</a>
    //           <a>Marketing</a>
    //           <a>Advertisement</a>
    //         </nav>
    //         <nav className="flex flex-col gap-4">
    //           <h6 className="font-semibold text-lg">Company</h6>
    //           <a>About us</a>
    //           <a>Contact</a>
    //           <a>Jobs</a>
    //           <a>Press kit</a>
    //         </nav>
    //       </div>
    //       <nav className="flex flex-col gap-4">
    //         <h6 className="font-semibold text-lg">Legal</h6>
    //         <a>Terms of use</a>
    //         <a>Privacy policy</a>
    //         <a>Cookie policy</a>
    //       </nav>
    //     </div>
    //     <div className="flex-auto sm:max-lg:flex sm:max-lg:gap-10   items-center">
    //       <div className="">
    //         <h1 className="text-2xl font-semibold  text-center lg:text-left">
    //           Our Weekly Newsletter
    //         </h1>
    //         <div className=" h-fit relative mt-4 w-auto ">
    //           <input
    //             type="text"
    //             className="py-3 w-full rounded-md outline-none"
    //           />
    //           <button className="absolute py-3 px-5 bg-cyan-600 text-white rounded-md right-0 top-0 bottom-0 my-1 mr-1 flex justify-center items-center">
    //             Newsletter
    //           </button>
    //         </div>
    //       </div>
    //       <div className="mt-5 text-center flex flex-col items-center lg:items-start mb-5 lg:mb-0">
    //         <h1 className="text-2xl font-semibold  ">Social Media Link</h1>
    //         <div className=" text-3xl flex gap-6 mt-3 ">
    //           <FaFacebook></FaFacebook>
    //           <FaTwitter />
    //           <FaInstagram />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <h1 className="text-center dark:text-slate-400 text-black font-semibold mt-12">
    //     @All right reserved. Arohi Ltd. 2024
    //   </h1>
    // </div>
  );
};

export default Footer;
