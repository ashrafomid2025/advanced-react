import { useParams } from "react-router-dom";

export default function Description() {
  const { id } = useParams();
  return (
    <div>
      <h1>Here I will show the product details for product {id}</h1>
    </div>
  );
}
