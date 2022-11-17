import "../styles/productdetail.css";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { Context } from "../context/AuthContext";

function ProductDetail() {
  const { state: product } = useLocation();
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState([product.colors[0]]);
  const [size, setSize] = useState(product.sizes[0]);
  const { addToCart } = Context();

  const handleAddToCart = () => {
    const item = {
      productId: product._id,
      color,
      size,
      quantity,
    };

    addToCart(item);
  };

  return (
    <div className="product-detail">
      <Navbar />
      <div className="product-detail-wrapper">
        <div className="product-detail_image-container">
          <img
            src={product.images[index]}
            alt=""
            className="product-detail_image"
          />
        </div>
        <div className="product-detail_info-container">
          <div className="inside">
            <h1 className="product-detail_title">{product.title}t</h1>
            <p className="product-detail_desc">{product.desc}</p>
            <p className="product-detail_price">&#8377; {product.price}</p>
            <div className="product-detail_filter-container">
              <div className="product-detail_filter">
                <span>Colors:</span>
                {product?.colors.map((color, i) => (
                  <div
                    className="colors"
                    key={color}
                    style={{ outline: index === i && "1px solid black" }}
                    onClick={() => {
                      setIndex(i);
                      setColor(color);
                    }}
                  >
                    {color}
                  </div>
                ))}
              </div>
              <div className="product-detail_filter">
                <span>Size:</span>
                <select
                  className="select"
                  onChange={(e) => setSize(e.target.value)}
                >
                  {product?.sizes.map((size) => (
                    <option value={size} key={size} className="option">
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="product-detail_add">
              <div className="add_container">
                <Remove
                  className="icon"
                  onClick={() =>
                    quantity > 1 && setQuantity((preValue) => preValue - 1)
                  }
                />
                <p className="quantity">{quantity}</p>
                <Add
                  className="icon"
                  onClick={() => setQuantity((preValue) => preValue + 1)}
                />
              </div>
              <button className="btn_cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductDetail;
