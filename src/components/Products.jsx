import "../styles/products.css";
import Product from "./Product";

function Products({ products }) {
  return (
    <div className="products-container">
      {products.map((item) => (
        <Product key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Products;
