import { useContext } from "react";

import { PetNameContext } from "../context/NameContext";

export default function DisplayPetsName() {
  const { pet } = useContext(PetNameContext);
  return (
    <div>
      <h1>My pet name is {pet}</h1>
    </div>
  );
}
