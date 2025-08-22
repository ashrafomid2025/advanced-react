import { useContext } from "react";
import { userContext } from "../App";

export default function ContextUser() {
  const { name } = useContext(userContext);
  return (
    <div>
      I am a new component
      <h1>My name is {name}</h1>
    </div>
  );
}
