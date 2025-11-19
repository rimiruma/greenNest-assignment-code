import { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";


const Profile = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome, {user?.displayName || "User"}!
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto text-center">
        {user?.photoURL && (
          <img
            referrerPolicy="no-referrer"
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border mb-4"
          />
        )}

        <p className="text-lg font-semibold">Name: {user?.displayName || "N/A"}</p>
        <p className="text-lg font-semibold mb-4">Email: {user?.email || "N/A"}</p>

        <button
          onClick={() => navigate("/auth/updateProfile")}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-2 rounded-lg"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
