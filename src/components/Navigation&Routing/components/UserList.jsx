import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const UserList = () => {
  const navigate = useNavigate();
  const { listUser, theme, toggleTheme } = useContext(AppContext);

  if (listUser.length === 0) {
    return <p>Đang tải danh sách người dùng...</p>;
  }

  return (
    <div className={`mx-4 sm:mx-[10%] rounded-2xl ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex justify-between items-center p-6">
        <h1 className="font-bold text-xl">Danh sách người dùng</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg transition bg-blue-500 text-white font-bold cursor-pointer hover:bg-blue-600"
        >
          {theme === "dark" ? "Chế độ sáng" : "Chế độ tối"}
        </button>
      </div>

      <table className="table-fixed w-[98%] border-b border-gray-700 mx-5">
        <thead>
          <tr className={theme === "dark" ? "bg-gray-900" : "bg-gray-200"}>
            <th className="py-4 px-3 border-b text-start text-sm">Name</th>
            <th className="py-3 px-3 border-b text-start text-sm">Website</th>
            <th className="py-3 px-3 border-b text-start text-sm">Email</th>
            <th className="border-b text-start text-sm">Company</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user) => (
            <tr
              key={user.id}
              onClick={() => navigate(`/user/${user.id}`)}
              className={`hover:bg-pink-500 transition cursor-pointer text-start ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black hover:bg-gray-300"}`}
            >
              <td className="py-3 px-3 border-b text-sm font-bold">
                {user.name}
              </td>
              <td className="py-3 px-3 border-b text-sm">{user.website}</td>
              <td className="py-3 px-3 border-b text-sm">{user.email}</td>
              <td className="py-3 border-b text-sm">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
