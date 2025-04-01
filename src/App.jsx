import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Navigation&Routing/pages/Home";
import UserDetail from "./components/Navigation&Routing/components/UserDetail";
import NotFound from "./components/Navigation&Routing/pages/NotFound";
import UserList from "./components/Navigation&Routing/components/UserList";
import AppContextProvider from "./components/Navigation&Routing/context/AppContext";
// import { CartProvider } from "../src/components/Context_API/CartContext";
// import ProductList from "../src/components/Context_API/ProductList";
// import Cart from "../src/components/Context_API/Cart";

// const App = () => {
//   return (
//     <div className="mx-4 sm:mx-[10%]">
//       <ToastContainer />
//       <AppContextProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="user" element={<UserList />} />
//             <Route path="user/:id" element={<UserDetail />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Router>
//       </AppContextProvider>
//     </div>
//   );
// };

// export default App;

import PostList from "./components/API/PostList";
function App() {
  return (
    <div>
      
      <PostList />
    </div>
  );
}
export default App;
