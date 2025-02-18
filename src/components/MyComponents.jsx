import React, { Component } from "react";
import AddUserInfor from "./AddUserInfor"; // Đảm bảo tên import đúng
import DisplayInfor from "./DisplayInfor";

class MyComponents extends Component {
  state = {
    listUser: [
      { id: 1, Name: "Dung", Age: 49 },
      { id: 2, Name: "Hoang", Age: 34 },
      { id: 3, Name: "Chien", Age: 32 },
    ],
  };

  // Hàm thêm người dùng mới vào danh sách
  handleAddnewUser = (userObject) => {
    this.setState({
      listUser: [userObject, ...this.state.listUser] 
    });
  }

  render() {
    return (
      <div>
        <AddUserInfor handleAddnewUser={this.handleAddnewUser} />
        <hr />
        <DisplayInfor listUser={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponents;
