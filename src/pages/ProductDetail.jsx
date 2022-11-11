import "../styles/productdetail.css";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import api from "../api/api";

function ProductDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    (async () => {
      let unsubscribe = true;

      try {
        const { data } = await api.get(`product/${id}`);
        if (unsubscribe) {
          setProduct(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }

      return () => {
        unsubscribe = false;
      };
    })();
  }, [id]);

  if (loading) return null;

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
                    onClick={() => setIndex(i)}
                  >
                    {color}
                  </div>
                ))}
              </div>
              <div className="product-detail_filter">
                <span>Size:</span>
                <select className="select">
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
                <Remove className="icon" />
                <p className="quantity">1</p>
                <Add className="icon" />
              </div>
              <button className="btn_cart">Add to Cart</button>
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
