import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Contact from "./Contact";
import CustomerSays from "./CustomerSays";
import OurProduct from "./OurProduct";
import OurService from "./OurService";
import OurTeam from "./OurTeam";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <OurService />
      <Contact/>
      <OurProduct/>
      <OurTeam/>
      <WhyUs/>
      <CustomerSays/>
    </div>
  );
};

export default Home;
