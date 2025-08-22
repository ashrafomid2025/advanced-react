import { useContext } from "react";
import { lastNameContext } from "../App";

export default function DisplayLastName() {
  const { lastname } = useContext(lastNameContext);
  return (
    <div>
      <h1>Hi there my last name is {lastname}</h1>
    </div>
  );
}
