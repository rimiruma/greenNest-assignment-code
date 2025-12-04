import { useEffect, useState } from "react";
import { Link } from "react-router";

const TopPlants = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("/plants.json")
            .then((res) => res.json())
            .then((data) => {
                const sorted = data.sort((a, b) => b.rating - a.rating);
                const topPlants = sorted.slice(0, 6);
                setPlants(topPlants);
            });
    }, []);

    return (
        <div className="max-w-[1200px] mx-auto px-6 py-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Top Plants
                </h1>
                <p className="text-gray-600">
                    Discover our best-rated plants, loved for their beauty and easy care.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plants.map((plant) => (
                    <div
                        key={plant.plantId}
                        className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 flex flex-col h-full"
                    >
                        <img
                            src={plant.image}
                            alt={plant.plantName}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {plant.plantName}
                            </h3>
                            <p className="text-gray-500 text-sm mb-4 flex-grow">
                                {plant.description.length > 80
                                    ? plant.description.slice(0, 80) + "..."
                                    : plant.description}
                            </p>

                            <div className="flex justify-between items-center mb-4 text-sm font-medium text-gray-700">
                                <span className="text-green-600 font-bold">${plant.price}</span>
                                <span className="text-yellow-500">{plant.rating} ★</span>
                            </div>

                            <div className="mt-auto">
                                <Link
                                    to={`/plants-details/${plant.plantId}`}
                                    className="btn w-full text-center px-10 py-2.5 bg-green-100 hover:bg-lime-800  text-black hover:text-white font-semibold rounded-full shadow-md cursor-pointer">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="text-center mt-10">
                <Link
                    to="/all-plants"
                    className="bg-green-600 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow-md"
                >
                    View All Plants
                </Link>
            </div> */}
        </div>
    );
};

export default TopPlants;
