import "../styles/products.css";
import {
  ShoppingBagOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Product({ item }) {
  return (
    <div className="product">
      <img src={item.images[0]} alt="" className="product_image" />
      <Link to={`/product/${item._id}`}>
        <div className="product_info">
          <div className="product_info_icon">
            <ShoppingBagOutlined />
          </div>
          <div className="product_info_icon">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
