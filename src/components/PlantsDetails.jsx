import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import DetailsCart from "./DetailsCart";

const PlantsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [plant, setPlant] = useState({});

  useEffect(() => {
    const plantDetails = data.find((item) => item.plantId == id);
    setPlant(plantDetails);
  }, [data, id]);

  return (
    <div className="px-4 sm:px-8 md:px-16 py-10">
      <DetailsCart plant={plant} />
    </div>
  );
};

export default PlantsDetails;
