import { Link } from "react-router";
import confetti from "canvas-confetti";

const PlantsCart = ({ plant }) => {

  const handleConfetti = () => {
    var duration = 2000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 50, zIndex: 999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      var particleCount = 40 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: 0.6 },
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: 0.6 },
      });
    }, 200);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h3 className="text-lg font-semibold text-gray-800">
          {plant.plantName}
        </h3>

        <p className="text-sm text-gray-500 mb-2">{plant.category}</p>

        <div className="flex justify-between items-center mb-3">
          <span className="text-green-600 font-bold">${plant.price}</span>
          <span className="text-yellow-500">{plant.rating} ★</span>
        </div>

        <Link
          onClick={handleConfetti}
          to={`/plants-details/${plant.plantId}`}
          className="btn w-full px-6 py-2.5 bg-green-100 text-black hover:bg-lime-800 hover:text-white rounded-full shadow-md"
        >
          View Details
        </Link>

      </div>
    </div>
  );
};

export default PlantsCart;
