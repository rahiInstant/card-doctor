import { useLoaderData } from "react-router-dom";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import ServiceBanner from "./ServiceBanner";

const ServiceDetail = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <ServiceBanner />
      <div className="grid grid-cols-3 mt-28 gap-8">
        <LeftSide data={data}/>
        <RightSide />
      </div>
    </div>
  );
};

export default ServiceDetail;
