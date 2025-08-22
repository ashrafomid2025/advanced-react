import { useContext } from "react";
import { nameContext } from "../context/PetContext";

export default function DisplayPetsName() {
  const { pet } = useContext(nameContext);
  return (
    <div>
      <h1>My pet name is {pet}</h1>
    </div>
  );
}
