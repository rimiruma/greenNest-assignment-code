import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 dark:bg-black">
      
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-green-700 text-center mb-6">
        About GreenNest
      </h2>

      {/* Description */}
      <p className="text-lg dark:text-white text-gray-700 text-center max-w-3xl mx-auto mb-14">
        GreenNest is your trusted indoor plant care & store, dedicated to bringing 
        nature closer to your everyday life. We help you discover, care for, 
        and grow beautiful indoor plants that refresh your home and boost your 
        wellbeing. From expert plant care tips to premium plant selections—everything 
        you need to build your green sanctuary starts here.
      </p>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 dark:bg-black md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 bg-green-50 dark:bg-black shadow rounded-xl text-center"
        >
          <h3 className="text-xl font-semibold  text-green-700 mb-2">
            Fresh Indoor Plants
          </h3>
          <p className="text-gray-600 dark:text-white">Handpicked, healthy, and ready to thrive.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="p-6 bg-green-50 dark:bg-black shadow rounded-xl text-center"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Care Guides
          </h3>
          <p className="text-gray-600 dark:text-white">Easy plant care tips for beginners to experts.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="p-6 bg-green-50 dark:bg-black shadow rounded-xl text-center"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Eco-Friendly Pots
          </h3>
          <p className="text-gray-600 dark:text-white">Stylish and sustainable pot collections.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="p-6 bg-green-50 dark:bg-black shadow rounded-xl text-center"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Home Delivery
          </h3>
          <p className="text-gray-600 dark:text-white">Fast & safe delivery right to your doorstep.</p>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutSection;
