import { useContext } from "react";
import { lastNameContext } from "../App";

export default function DisplaySureName() {
  const { lastname } = useContext(lastNameContext);
  return (
    <div>
      <h1>Hi there I come from another component my last name is {lastname}</h1>
    </div>
  );
}
