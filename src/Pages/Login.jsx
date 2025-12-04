import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { Link, useNavigate } from "react-router";
import { use,useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { setUser } = use(AuthContext); // Use setUser from context
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Email/Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    // Firebase email/password login
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user); // Save user in context
        toast.success("Login successful 🎉");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError("Invalid email or password. Please try again.");
        toast.error("Login failed");
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful with Google");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6">
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white shadow-lg sm:shadow-xl rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-green-300">
          Login Your Account!
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none text-sm sm:text-base"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600 outline-none pr-10 text-sm sm:text-base"
            />
            <div
              className="absolute right-3 top-[38px] text-gray-500 cursor-pointer hover:text-green-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
            {error && <p className="text-xs sm:text-sm text-red-600 mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold bg-green-100 rounded-md transition cursor-pointer text-sm sm:text-base"
          >
            Login
          </button>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm mt-3">
          <p className="">Don't have an account?</p>
          <Link
            to="/register"
            className="text-green-700 hover:underline font-medium"
          >
            Register here
          </Link>
        </div>

        {/* Google Login */}
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-3 sm:px-4 py-2 border border-green-500 rounded-md hover:bg-green-50 transition text-sm sm:text-base"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="font-medium text-gray-700 cursor-pointer">
              Continue with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
