import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [ usersList, setUsersList ] = useState()

  return (
    <UserContext.Provider
      value={{
        usersList,
        setUsersList
      }}
    >
      {children}
    </UserContext.Provider>
  );
};








