import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3 flex items-center">
            <span className="mr-2 text-2xl">🏠</span> HomeNest
          </h2>
          <p className=" text-gray-400 leading-relaxed">
            HomeNest – A Real Estate Listing Portal where you can buy, sell, or rent your dream property with ease and trust.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <span className="mr-2">📍</span> Dhaka, Bangladesh
            </li>
            <li>
              <span className="mr-2">📞</span> +880 1234 567890
            </li>
            <li>
              <span className="mr-2">✉️</span> support@homenest.com
            </li>
          </ul>
        </div>

        {/* Quick Links + Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 mb-4">
            <li><Link to="/terms" className="hover:text-green-400 transition">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link></li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition text-xl">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition text-xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition text-xl">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition text-xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-green-400 font-semibold">HomeNest.</span> All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
