import expert1 from "../assets/expart1.png";
import expert2 from "../assets/expart2.png";
import expert3 from "../assets/expart3.png";
import expert4 from "../assets/expart1.png";

const Meet = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Meet Our Plant Care Experts
        </h1>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Our friendly and experienced plant care specialists are here to help
          you every step of the way. Whether it’s watering, sunlight, or soil —
          they know how to make your plants thrive beautifully.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl shadow-lg overflow-hidden max-w-6xl mx-auto">
        
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[450px]">
          <img
            src="https://i.ibb.co.com/nq3D7GGC/expart.webp"
            alt="Our Plant Care Team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Passionate About Plant Care
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
            Each of our experts brings a unique touch to the world of plant
            care. Together, they help thousands of plant lovers grow their
            green spaces with confidence and joy.
          </p>

          {/* Expert Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {/* Expert 1 */}
            <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-2xl hover:bg-green-100 transition">
              <img
                src={expert1}
                alt="Sadia Rahman"
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full border-2 border-green-500"
              />
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Sadia Rahman
                </h3>
                <p className="text-green-600 text-xs sm:text-sm">
                  Indoor Plant Expert
                </p>
              </div>
            </div>

            {/* Expert 2 */}
            <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-2xl hover:bg-green-100 transition">
              <img
                src={expert2}
                alt="Arif Chowdhury"
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full border-2 border-green-500"
              />
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Arif Chowdhury
                </h3>
                <p className="text-green-600 text-xs sm:text-sm">
                  Succulent Specialist
                </p>
              </div>
            </div>

            {/* Expert 3 */}
            <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-2xl hover:bg-green-100 transition">
              <img
                src={expert3}
                alt="Nusrat Jahan"
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full border-2 border-green-500"
              />
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Nusrat Jahan
                </h3>
                <p className="text-green-600 text-xs sm:text-sm">Soil Advisor</p>
              </div>
            </div>

            {/* Expert 4 */}
            <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-2xl hover:bg-green-100 transition">
              <img
                src={expert4}
                alt="Tariq Hasan"
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full border-2 border-green-500"
              />
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Tariq Hasan
                </h3>
                <p className="text-green-600 text-xs sm:text-sm">
                  Hydroponic Gardener
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="bg-green-600 text-white px-6 sm:px-8 py-2 rounded-full font-semibold hover:bg-green-500 cursor-pointer transition text-sm sm:text-base">
            Learn More About Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Meet;
