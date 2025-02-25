import React from "react";
import MyComponents from "./components/MyComponents";
import ToDoApp from "./components/ReactHooks/ToDoApp";
import SinhVien from "./components/ReactHooks/SinhVien";

const App = () => {
  return (
    <>
      <SinhVien/>
      <ToDoApp />
    </>
  );
};

export default App;
