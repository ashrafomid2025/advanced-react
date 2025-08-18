import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Checkout() {
  const { name } = useContext(UserContext);
  return (
    <div>
      <h1>Checkout for {name}</h1>
    </div>
  );
}
