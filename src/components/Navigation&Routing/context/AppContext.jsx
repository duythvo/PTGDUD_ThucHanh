import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { listUsers } from "../../../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [listUser, setListUser] = useState([]);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //   const getUserList = async () => {
  //     try {
  //       const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //       setListUser(res.data);
  //     } catch (err) {
  //       toast.error(err.message);
  //     }
  //   };

  const getUserList = () => {
    setListUser(listUsers);
  };

  useEffect(() => {
    getUserList();
  }, []);

  const value = {
    listUser,
    getUserList,
    theme,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
