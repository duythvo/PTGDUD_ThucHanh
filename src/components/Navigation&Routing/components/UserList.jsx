import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FaSearch } from "react-icons/fa"; 
import { FaSpinner } from "react-icons/fa"; 

const UserList = () => {
  const navigate = useNavigate();
  const { listUser, theme, toggleTheme } = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);  
  const usersPerPage = 5;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = listUser.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (listUser.length > 0) {
      setLoading(false);
    }
  }, [listUser]);

  const reLoadAPI = () => {
    setLoading(true); 
    window.location.reload();
  };

  if (listUser.length === 0 && loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  return (
    <div
      className={`mx-4 sm:mx-[10%] rounded-2xl ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center p-6">
        <h1 className="font-bold text-xl">Danh sách người dùng</h1>
        <div className="flex gap-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg transition bg-blue-500 text-white font-bold cursor-pointer hover:bg-blue-600"
          >
            {theme === "dark" ? "Chế độ sáng" : "Chế độ tối"}
          </button>
          <button
            onClick={reLoadAPI}
            className="px-4 py-2 rounded-lg transition bg-blue-400 text-white font-bold cursor-pointer hover:bg-blue-600"
          >
            Reload
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="flex items-center bg-gray-200 rounded-lg p-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Tìm kiếm người dùng..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-transparent text-black focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto px-5 py-6">
        <table className="table-auto w-full text-sm">
          <thead>
            <tr
              className={`${
                theme === "dark" ? "bg-gray-800" : "bg-gray-200"
              } text-left text-sm`}
            >
              <th className="py-3 px-4">Hình ảnh</th>
              <th className="py-3 px-4">Tên</th>
              <th className="py-3 px-4">Website</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Công ty</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr
                key={user.id}
                onClick={() => navigate(`/user/${user.id}`)}
                className={`cursor-pointer hover:bg-blue-100 ${
                  theme === "dark"
                    ? "bg-gray-900 text-white hover:bg-pink-100 hover:text-black"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                <td className="py-3 px-4 text-center">
                  <img
                    src={`https://i.pravatar.cc/150?img=${user.id}`}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover mx-auto"
                  />
                </td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.website}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 py-4">
        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            } px-4 py-2 rounded-md transition hover:bg-blue-400`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
