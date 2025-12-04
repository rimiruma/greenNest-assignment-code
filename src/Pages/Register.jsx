import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { useNavigate, Link } from "react-router";
import { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailForReset, setEmailForReset] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    setEmailForReset(email);

    if (!/[A-Z]/.test(password)) {
      setError("Password must include at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must include at least one lowercase letter.");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo || "https://cdn-icons-png.flaticon.com/512/847/847969.png",
        })
          .then(() => {
            setUser({
              uid: user.uid,
              displayName: name,
              email: user.email,
              photoURL:
                photo || "https://cdn-icons-png.flaticon.com/512/847/847969.png",
            });
            toast.success("Registration successful");
            navigate("/");
          })
          .catch(() => toast.error("Profile update failed."));
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Registration failed!");
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleUser = result.user;
        setUser({
          uid: googleUser.uid,
          displayName: googleUser.displayName || "Anonymous User",
          email: googleUser.email,
          photoURL:
            googleUser.photoURL ||
            "https://cdn-icons-png.flaticon.com/512/847/847969.png",
        });
        toast.success("Login successful with Google");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  // Forgot Password
  const handleForgotPassword = () => {
    if (!emailForReset) {
      toast.error("Please enter your email first!");
      return;
    }
    sendPasswordResetEmail(auth, emailForReset)
      .then(() => {
        toast.success("Password reset email sent! Check your Gmail inbox.");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 dark:bg-black">
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white shadow-lg sm:shadow-xl dark:bg-black rounded-2xl border border-green-100">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-green-300">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 dark:text-white font-medium text-gray-700 text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="input input-bordered w-full text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 dark:text-white font-medium text-gray-700 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setEmailForReset(e.target.value)}
              placeholder="you@example.com"
              className="input input-bordered w-full text-sm sm:text-base"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 dark:text-white font-medium text-gray-700 text-sm sm:text-base">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="https://yourphoto.com/image.jpg"
              className="input input-bordered w-full text-sm sm:text-base"
            />
          </div>

          {/* Password + Eye Toggle */}
          <div className="relative">
            <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Enter a strong password"
              className="input input-bordered w-full pr-10 text-sm sm:text-base"
            />
            <div
              className="absolute right-3 top-[38px] text-gray-500 cursor-pointer hover:text-green-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
            {error && (
              <p className="text-xs sm:text-sm text-red-600 mt-1">{error}</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-xs sm:text-sm text-green-600 hover:underline cursor-pointer"
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 dark:text-black text-sm sm:text-base font-semibold bg-green-100 cursor-pointer rounded-md transition"
          >
            Register
          </button>
        </form>

        {/* Login Redirect */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm mt-3">
          <p>Already have an account?</p>
          <Link
            to="/login"
            className="text-green-600 hover:underline font-medium"
          >
            Login here
          </Link>
        </div>

        {/* Google Login */}
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center cursor-pointer gap-2 w-full sm:w-auto px-3 sm:px-4 py-2 border border-green-500 rounded-md hover:bg-green-50 transition text-sm sm:text-base"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="font-medium text-gray-700">Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
