import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const [value, setValue] = useState("guest");
  const { state, dispatch } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "login", payload: value });
    // setUsername(value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
