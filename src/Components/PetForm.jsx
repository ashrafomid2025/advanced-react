import { useContext, useState } from "react";
import { PetNameContext } from "../context/NameContext";

export default function PetForm() {
  const { pet, setPet } = useContext(PetNameContext);
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
