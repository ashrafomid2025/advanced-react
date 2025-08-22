import { useLocation } from "react-router-dom";
import Display from "../Components/Display";

export default function Emoji() {
  const location = useLocation();
  const { emoji, animalName } = location.state;
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        Display: "grid",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* context => hook react, share data global
      name=> 
      component 1, componenet2 , componenet 3, component4
      */}
      <h1>This is the emoji of {animalName}</h1>
      <h1 style={{ fontSize: "100px" }}>{emoji}</h1>
    </div>
  );
}
// context app user=> componet 1, component 2, compoenent 3, compoenet 4
