import { act, createContext, useReducer, useState } from "react";

const UserContext = createContext();
function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, { id: 1, name: null });
  function userReducer(state, action) {
    if (action.type === "login") {
      return { ...state, name: action.payload };
    }
    if (action.type === "logout") {
      return { ...state, name: "guest" };
      // return
    }
  }
  //   const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
