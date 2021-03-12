import { useState, createContext } from "react";

// Buat dulu setup context dengan createContext
export const UserContext = createContext();

// Buat provider untuk isi datanya
const UserContextProvider = (props) => {
  const [user] = useState({
    nama: "Impact Byte",
    batch: "Dynamic Draco",
  });
  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
