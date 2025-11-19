const PlantCare = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Plant Care Essentials
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Keeping your plants healthy starts with choosing the right container,
          soil, and watering routine. Explore our simple tips to help your
          indoor garden thrive and grow beautifully.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="md:w-1/2 h-[400px]">
          <img
            src="https://i.ibb.co.com/fdVV48m5/W692795-MG-Indoor-Web-Hub-Mod04-510x420-D-2x-072825.webp"
            alt="Indoor plants in various containers"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Choosing the Right Container
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Choose a pot with drainage holes to prevent root rot. For the best
            fit, select one that’s{" "}
            <span className="font-semibold">1–2 inches wider</span> and slightly
            deeper than the container your plant came in when you purchased it.
          </p>

          <button className="font-semibold btn px-20  py-3 rounded-full cursor-pointer text-gray-900 bg-yellow-400">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlantCare;
