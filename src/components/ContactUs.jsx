import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 dark:bg-black">
      {/* Title */}
      <h2 className="text-4xl font-bold text-green-700 text-center mb-6">
        Contact Us
      </h2>

      <p className="text-center dark:text-white text-gray-600 mb-12 max-w-2xl mx-auto">
        Have a question or need help with your indoor plants? We’re always here
        to assist you. Reach out to us anytime!
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 dark:bg-black">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-green-50 dark:bg-black p-8 rounded-2xl shadow"
        >
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Get in Touch</h3>

          <p className="text-gray-700 mb-4 dark:text-white">
            📍 <strong>Address:</strong> GreenNest Store, Dhaka, Bangladesh
          </p>

          <p className="text-gray-700 mb-4 dark:text-white">
            📞 <strong>Phone:</strong> +880 123 456 789
          </p>

          <p className="text-gray-700 mb-6 dark:text-white">
            ✉️ <strong>Email:</strong> support@greennest.com
          </p>

          <p className="text-gray-600 dark:text-white">
            We reply within 24 hours. Feel free to message us for plant care
            guidance, product information, or order issues.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="dark:bg-black p-8 rounded-2xl shadow border"
        >
          <div className="mb-4 dark:bg-black">
            <label className="block font-medium text-gray-700 dark:text-white mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4 dark:bg-black">
            <label className="block font-medium text-gray-700 dark:text-white mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block  dark:text-white font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactSection;
