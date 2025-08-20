import { createContext, useState } from "react";

const UserContext = createContext();
function UserContextProvider({ children }) {
  const [name, setName] = useState("guest");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserContextProvider };
