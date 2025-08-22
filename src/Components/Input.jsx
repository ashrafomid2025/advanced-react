import { useContext, useState } from "react";
import { lastNameContext } from "../App";

export default function Input() {
  const [value, setValue] = useState("");
  const { lastname, setLastname } = useContext(lastNameContext);
  function handleClick() {
    setLastname(value);
  }
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>show Last name</button>
    </div>
  );
}
