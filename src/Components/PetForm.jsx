import { useContext, useState } from "react";
import { nameContext } from "../context/PetContext";

export default function PetForm() {
  const { pet, setPet } = useContext(nameContext);
  const [value, setValue] = useState("");
  function handleClick() {
    setPet(value);
  }
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Save pet name</button>
    </div>
  );
}
