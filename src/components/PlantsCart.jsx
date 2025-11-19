import { Link } from "react-router";

const PlantsCart = ({ plant }) => {
  console.log(plant);

  return (
    <div className="bg-white border rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition">
      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {plant.plantName}
        </h3>

        <p className="text-sm text-gray-500 mb-2">{plant.category}</p>


        <div className="flex justify-between items-center text-sm font-medium text-gray-700 mb-4">
          <span className="text-green-600 font-bold">${plant.price}</span>
          <span className="text-yellow-500">{plant.rating} ★</span>
        </div>

        <Link
          to={`/plants-details/${plant.plantId}`}
          className="btn w-full text-center px-6 py-2.5 bg-lime-600 hover:bg-lime-800  text-white font-semibold rounded-full shadow-md cursor-pointer">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlantsCart;
