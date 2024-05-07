import { useLoaderData, useParams } from "react-router-dom";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import ServiceBanner from "./ServiceBanner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ServiceDetail = () => {
  // const data = useLoaderData()
  const params = useParams();
  // console.log(params)
  const { data, isPending } = useQuery({
    queryKey: ["particular"],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:8080/particular/${params.id}`);
      return result.data;
    },
  });

  if (isPending) {
    return "Loading...";
  }
// console.log(data)
  
  return (
    <div>
      <ServiceBanner />
      <div className="grid grid-cols-3 mt-28 gap-8">
        <LeftSide data={data} />
        <RightSide data={data} />
      </div>
    </div>
  );
};

export default ServiceDetail;
