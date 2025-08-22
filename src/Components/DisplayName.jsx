import { useContext } from "react";
import { userContext } from "../App";

export default function DisplayName() {
  const { name } = useContext(userContext);
  return <div>My name is {name}</div>;
}
