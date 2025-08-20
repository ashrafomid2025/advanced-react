import { getAllProducts } from "../Products/produts";
import { Link } from "react-router-dom";
export default function Products() {
  const produtcts = getAllProducts();
  return (
    <div>
      <ul>
        {produtcts.map((product, index) => (
          <li key={index}>
            <h1>
              <Link to={`/product/${product.id}`}>
                {product.name}-- {product.emoji}
              </Link>
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
