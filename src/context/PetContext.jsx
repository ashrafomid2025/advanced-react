import { createContext, useState } from "react";

const nameContext = createContext();
function PetContext({ children }) {
  const [pet, setPet] = useState("cat");
  return (
    <nameContext.Provider value={{ pet, setPet }}>
      {children}
    </nameContext.Provider>
  );
}
export { PetContext, nameContext };
