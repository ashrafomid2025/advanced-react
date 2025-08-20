import { useLocation } from "react-router-dom";

export default function Emoji() {
  const location = useLocation();
  const { emoji } = location.state;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "98px" }}>{emoji}</h1>
    </div>
  );
}
// context app user=> componet 1, component 2, compoenent 3, compoenet 4
