import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { AppContext } from "../context/AppContext";

const UserDetail = () => {
  const navigate = useNavigate();
  const { listUser } = useContext(AppContext);
  const { id } = useParams();
  const user = listUser.find((user) => user.id === parseInt(id));

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-center mb-4">{user.name}</h2>

      <div className="flex flex-col sm:flex-row items-center justify-items-center gap-6"> 
        <div className="space-y-3 flex flex-col gap-5 ">
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Website:</span> {user.website}
          </p>
          <p>
            <span className="font-semibold">Số điện thoại:</span> {user.phone}
          </p>
          <p>
            <span className="font-semibold">Công ty:</span> {user.company.name}
          </p>
          <p>
            <span className="font-semibold">Địa chỉ:</span>{" "}
            {`${user.address.street}, ${user.address.city}`}
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition cursor-pointer"
      >
        Quay lại
      </button>
    </div>
  );
};

export default UserDetail;
