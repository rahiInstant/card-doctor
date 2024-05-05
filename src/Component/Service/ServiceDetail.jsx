import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import ServiceBanner from "./ServiceBanner";

const ServiceDetail = () => {
  return (
    <div>
      <ServiceBanner />
      <div className="grid grid-cols-3 mt-28 gap-8">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default ServiceDetail;
