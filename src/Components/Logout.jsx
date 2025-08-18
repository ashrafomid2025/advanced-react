import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Logout() {
  const { dispatch } = useContext(UserContext);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "logout",
            payload: "guest",
          })
        }
      >
        Logout
      </button>
    </div>
  );
}
