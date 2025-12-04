const ExtraSection = () => {
  return (
    <div className="">
      <section className="bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 md:px-12">
        {/* Text Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Bring Nature Into Your Home
          </h1>
          <p className="text-gray-600 dark:text-white text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            Discover the joy of indoor gardening and create a peaceful, green space
            inside your home. Learn how to care for plants, choose the right containers,
            and make your indoor jungle thrive beautifully.
          </p>
        </div>

        {/* Image + Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch overflow-hidden shadow-lg">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[450px]">
            <img
              src="https://i.ibb.co.com/rKZQw9Vw/W692795-MG-Indoor-Web-Hub-Mod05a-420x500-D-2x-072825.png"
              alt="Indoor gardening plants on shelf"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2 bg-green-100 dark:bg-black dark:text-white text-black flex flex-col justify-center p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Indoor Gardening Made Easy
            </h2>
            <p className="mb-6 text-sm sm:text-base leading-relaxed text-black dark:text-white">
              Whether you’re growing an indoor jungle or starting out with your
              first plant baby, we’re here to make indoor gardening simple,
              stress-free, and fun!
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 dark:text-white text-black text-sm sm:text-base">
              <li>How to Care for Houseplants</li>
              <li>Identifying Common Houseplant Problems</li>
              <li>Ultimate Guide to Apartment Gardening</li>
              <li>Easy Plants to Grow Indoors</li>
            </ul>
            <button className="font-semibold px-10 sm:px-14 md:px-20 py-3 rounded-full bg-green-200 cursor-pointer text-black transition duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection;
