import { useLoaderData } from "react-router";
import PlantsCart from "./PlantsCart";

const AllPlants = () => {
  const plants = useLoaderData();
  console.log(plants);
  

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
        All Plants
      </h2>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
        Discover all our beautiful plants — from air purifiers to tropical
        greens. Each one is carefully selected to bring life and freshness
        to your home.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plants.map((plant) => (
          <PlantsCart key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default AllPlants;
