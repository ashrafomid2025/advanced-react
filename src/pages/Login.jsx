import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export default function Login() {
  const [value, setUser] = useLocalStorage();
  const [user, setUserValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setUser(user);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUserValue(e.target.value)}
        />
        <button>Login</button>
      </form>
      <h1>You are logged In as {value}</h1>
    </>
  );
}
