import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Navigation&Routing/pages/Home";
import UserDetail from "./components/Navigation&Routing/components/UserDetail";
import NotFound from "./components/Navigation&Routing/pages/NotFound";


const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
