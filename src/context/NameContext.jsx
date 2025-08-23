import { createContext, useState } from "react";

const PetNameContext = createContext();
function NameContext({ children }) {
  const [pet, setPet] = useState("cat");
  return (
    <PetNameContext.Provider value={{ pet, setPet }}>
      {children}
    </PetNameContext.Provider>
  );
}

export { PetNameContext, NameContext };
