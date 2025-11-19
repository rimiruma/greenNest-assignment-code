import React from "react";

const PlantOfTheWeek = () => {
  return (
    <section className="bg-green-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
        Plant of the Week
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co.com/GQwS3ZPr/images-4.jpg"
            alt="Snake Plant"
            className="w-full h-[350px] object-cover"
          />
        </div>

        <div className="md:w-1/2 p-8 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Snake Plant
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Known for its air-purifying powers, the Snake Plant thrives in low
            light and needs little water. Perfect for busy plant lovers who want
            fresh air and modern greenery indoors.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
