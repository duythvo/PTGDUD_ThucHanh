import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { AppContext } from "../context/AppContext";
import { FaUserCircle } from "react-icons/fa"; // Use a user icon if no image is available

const UserDetail = () => {
  const navigate = useNavigate();
  const { listUser } = useContext(AppContext);
  const { id } = useParams();
  const user = listUser.find((user) => user.id === parseInt(id));

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl mt-10">
      {/* User Profile */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4">
          <img
            src={`https://i.pravatar.cc/150?img=${user.id}`}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">{user.name}</h2>
        <p className="text-gray-600 text-sm mb-4">{user.company.name}</p>
      </div>

      {/* User Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-gray-800">
            <span className="font-semibold text-lg">Email:</span> {user.email}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-lg">Website:</span> {user.website}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-lg">Phone:</span> {user.phone}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-800">
            <span className="font-semibold text-lg">Company:</span> {user.company.name}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-lg">Address:</span>{" "}
            {`${user.address.street}, ${user.address.city}`}
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105"
        >
          Quay lại
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
