import { useParams } from "react-router-dom";
import { getAllProducts } from "../product/Pruducts";
export default function ProDetails() {
  const products = getAllProducts();
  const { id } = useParams();
  const product = products.find((product) => product.id == id);
  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.emoji}</h1>
      <p>{product.description}</p>
    </div>
  );
}
