import { useNavigate, useParams } from "react-router-dom";
import { getAllProducts } from "../Products/produts";

export default function ProductsDetail() {
  const { id } = useParams();
  console.log(id);
  const products = getAllProducts();
  const product = products.find((product) => product.id == id);
  const navigate = useNavigate();
  const emoji = product.emoji;
  function handleClick() {
    navigate("/emoji", { state: { emoji } });
  }
  return (
    <div>
      <h1>Details acount {product.name}</h1>
      <h2>{product.emoji}</h2>
      <p>{product.description}</p>
      <button onClick={handleClick}>
        Click me to display the emoji of {product.name}
      </button>
    </div>
  );
}
