import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile, updateEmail } from "firebase/auth";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  // 1️⃣ Get the logged-in user info from context
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // 2️⃣ Set up states to store form input values
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [email, setEmail] = useState(user?.email || "");

  // 3️⃣ Function to handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !photoURL || !email) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      // 4️⃣ Update displayName & photoURL in Firebase
      await updateProfile(user, { displayName: name, photoURL });

      // 5️⃣ Update email separately (Firebase requires it separately)
      await updateEmail(user, email);

      toast.success("Profile updated successfully!");
      navigate("/auth/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  // 6️⃣ The JSX form
  return (
    <div className="p-10 bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-md rounded-lg p-6 max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Update Profile
        </h1>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg py-2 px-4"
            required
          />
        </div>

        {/* Photo URL Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Photo URL
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter photo URL"
            className="w-full border border-gray-300 rounded-lg py-2 px-4"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg py-2 px-4"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg cursor-pointer transition duration-200"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
