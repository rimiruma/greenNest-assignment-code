import { useLoaderData } from "react-router";
import { useState } from "react";
import PlantsCart from "./PlantsCart";

const AllPlants = () => {
  const plants = useLoaderData();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Filter by Search
  const filteredPlants = plants
    .filter((p) =>
      p.plantName.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "low") {
        return a.price - b.price;
      }
      if (sortBy === "high") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-2 text-green-400">All Plants</h2>
      <p className="text-center text-gray-500 mb-8">
        Explore our collection of beautiful plants for your home and garden.
      </p>

      {/* Search & Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="search"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full sm:w-1/2"
        />

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <label className="font-medium">Sort By:</label>
          <select
            className="select select-bordered"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="low">Price Low to High</option>
            <option value="high">Price High to Low</option>
          </select>
        </div>
      </div>

      {/* Plant Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <PlantsCart key={plant.plantId} plant={plant} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No plants found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllPlants;
