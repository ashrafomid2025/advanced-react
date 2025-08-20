import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Form() {
  const { name, setName } = useContext(UserContext);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
