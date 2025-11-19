import { useState } from "react";
import { toast } from "react-toastify";

const DetailsCart = ({ plant }) => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Consultation booked successfully!");
    setForm({ name: "", email: "" });
  };

  if (!plant) return null;

  return (
    <div className="max-w-5xl mx-auto space-y-10 px-4 sm:px-6 md:px-8 py-10">
      {/* Image Section */}
      <div className="w-full">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Plant Details Section */}
      <div className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-xl shadow space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {plant.plantName}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {plant.description}
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-6 text-gray-700 font-medium">
          <span className="text-green-600 font-semibold">
            Price: ${plant.price}
          </span>
          <span className="text-yellow-500">
            Rating: {plant.rating} ⭐
          </span>
          <span className="text-gray-800">
            Stock: {plant.availableStock}
          </span>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Book Consultation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="input input-bordered w-full rounded-md p-3 border-gray-300 focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="input input-bordered w-full rounded-md p-3 border-gray-300 focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 sm:px-16 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-md cursor-pointer transition transform hover:scale-105"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsCart;
