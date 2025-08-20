import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Display() {
  const { name, setName } = useContext(UserContext);
  return (
    <div>
      <h1>Hi dear my name is {name}</h1>
    </div>
  );
}
