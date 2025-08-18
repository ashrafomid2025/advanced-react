import { Link } from "react-router-dom";
import { getAllProducts } from "../product/Pruducts";
export default function Product() {
  const products = getAllProducts();
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/prodetails/${product.id}`}>
              <h1>
                {product.emoji}-- {product.name}
              </h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
