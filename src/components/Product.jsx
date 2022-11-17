import "../styles/products.css";
import { useNavigate } from "react-router-dom";

function Product({ item }) {
  const navigate = useNavigate();
  return (
    <div className="product">
      <img src={item.images[0]} alt="" className="product_image" />
      <div
        className="product_info"
        onClick={() => navigate(`/product/${item._id}`, { state: item })}
      >
        <h3 style={{ color: "white" }}>{item.title}</h3>
      </div>
    </div>
  );
}

export default Product;
