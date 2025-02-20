import React, { Component, useState } from "react";
import AddUserInfor from "./AddUserInfor"; // Đảm bảo tên import đúng
import DisplayInfor from "./DisplayInfor";

const MyComponents = (props) => {
  const [listUser, setListUser] = useState([
    { id: 1, Name: "Dung", Age: 49 },
    { id: 2, Name: "Hoang", Age: 34 },
    { id: 3, Name: "Chien", Age: 32 },
  ]);

  const handleAddnewUser = (userObject) => {
    if (listUser.length >= 10) {
      alert("Danh sách người dùng đã đầy");
      return;
    }
    setListUser([userObject, ...listUser]);
  };

  const handleDeleteUser = (userID) => {
    let listUserClone = listUser;
    listUserClone = listUserClone.filter((item) => item.id !== userID);
    setListUser(listUserClone);
  };

  const handleDeleteAllUser = () => {
    setListUser([]);
  };

  return (
    <div>
      <AddUserInfor handleAddnewUser={handleAddnewUser} />
      <hr
        className="h-1 bg-gradient-to-r from-red-500 
      via-yellow-500 via-blue-500 via-green-500 via-purple-500
      to-pink-500 border-0"
      />
      <DisplayInfor
        listUser={listUser}
        handleDeleteUser={handleDeleteUser}
        handleDeleteAllUser={handleDeleteAllUser}
      />
    </div>
  );
};

export default MyComponents;
